/** @format */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import partners from "./images/partners.png";
const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [paymentMethod, setPaymentMethod] = useState("flutterwave");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    telephone: "",
    country: "",
    location: "",
  });
  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyCode, setCurrencyCode] = useState("USD");

  const countries = [
    { code: "US", name: "United States", dialCode: "+1" },
    { code: "GB", name: "United Kingdom", dialCode: "+44" },
    { code: "NG", name: "Nigeria", dialCode: "+234" },
    { code: "KE", name: "Kenya", dialCode: "+254" },
    { code: "ZA", name: "South Africa", dialCode: "+27" },
    { code: "GH", name: "Ghana", dialCode: "+233" },
    { code: "IN", name: "India", dialCode: "+91" },
    { code: "CA", name: "Canada", dialCode: "+1" },
    { code: "AU", name: "Australia", dialCode: "+61" },
    { code: "DE", name: "Germany", dialCode: "+49" },
    { code: "FR", name: "France", dialCode: "+33" },
    { code: "IT", name: "Italy", dialCode: "+39" },
    { code: "ES", name: "Spain", dialCode: "+34" },
    { code: "BR", name: "Brazil", dialCode: "+55" },
    { code: "JP", name: "Japan", dialCode: "+81" },
    { code: "CN", name: "China", dialCode: "+86" },
    { code: "RU", name: "Russia", dialCode: "+7" },
    { code: "MX", name: "Mexico", dialCode: "+52" },
    { code: "EG", name: "Egypt", dialCode: "+20" },
    { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  ];

  useEffect(() => {
    // Get the plan from URL parameters
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      // Capitalize first letter for matching plan names
      const formattedPlan =
        plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase();
      if (plans[formattedPlan]) {
        setSelectedPlan(formattedPlan);
      }
    }
  }, []);

  const plans = {
    Standard: {
      price: 19,
      originalPrice: 29,
      features: [
        "Basic video effects",
        "Limited platform support",
        "Limited Socials integration",
        "Basic filters",
      ],
    },
    Pro: {
      price: 29,
      originalPrice: 38,
      features: [
        "All Free features",
        "Advanced video effects",
        "Extended platform support",
        "Premium filters",
        "All Socials integration",
        "Priority support",
      ],
    },
    Plus: {
      price: 39,
      originalPrice: 78,
      features: [
        "All Standard features",
        "Voice changer",
        "Full platform support",
        "Advanced filters",
        "All Socials integration",
        "24/7 Priority support",
      ],
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const country = countries.find((c) => c.code === countryCode);
    setFormData((prev) => ({
      ...prev,
      country: countryCode,
      telephone: country ? country.dialCode : "",
    }));
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value;
    const country = countries.find((c) => c.code === formData.country);
    if (country && !value.startsWith(country.dialCode)) {
      setFormData((prev) => ({
        ...prev,
        telephone: country.dialCode,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        telephone: value,
      }));
    }
  };

  // Add currency conversion function
  const getCurrencyCode = (countryCode) => {
    const currencyMap = {
      US: "USD",
      GB: "GBP",
      NG: "NGN",
      KE: "KES",
      ZA: "ZAR",
      GH: "GHS",
      IN: "INR",
      CA: "CAD",
      AU: "AUD",
      DE: "EUR",
      FR: "EUR",
      IT: "EUR",
      ES: "EUR",
      BR: "BRL",
      JP: "JPY",
      CN: "CNY",
      RU: "RUB",
      MX: "MXN",
      EG: "EGP",
      SA: "SAR",
    };
    return currencyMap[countryCode] || "USD";
  };

  // Add useEffect to fetch exchange rate when country changes
  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (formData.country) {
        const newCurrencyCode = getCurrencyCode(formData.country);
        setCurrencyCode(newCurrencyCode);

        if (newCurrencyCode !== "USD") {
          try {
            const response = await fetch(
              `https://api.exchangerate-api.com/v4/latest/USD`
            );
            const data = await response.json();
            setExchangeRate(data.rates[newCurrencyCode]);
          } catch (error) {
            console.error("Error fetching exchange rate:", error);
            setExchangeRate(1);
          }
        } else {
          setExchangeRate(1);
        }
      }
    };

    fetchExchangeRate();
  }, [formData.country]);

  const handleFlutterwavePayment = async () => {
    try {
      console.log("Starting Flutterwave payment...");

      // Calculate converted amount
      const convertedAmount = plans[selectedPlan].price * exchangeRate;

      // Check if Flutterwave script is already loaded
      if (window.FlutterwaveCheckout) {
        console.log("Flutterwave script already loaded");
      } else {
        console.log("Loading Flutterwave script...");
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
        console.log("Flutterwave script loaded successfully");
      }

      // Initialize Flutterwave payment with converted amount
      const paymentData = {
        public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: `tx-${Date.now()}`,
        amount: convertedAmount,
        currency: currencyCode,
        payment_options: "card, banktransfer, ussd",
        customer: {
          email: formData.email,
          phone_number: formData.telephone,
          name: "Customer",
        },
        customizations: {
          title: "Jhroke Camera",
          description: `Payment for ${selectedPlan} Plan`,
          logo: process.env.REACT_APP_LOGO_URL,
        },
        callback: function (response) {
          console.log("Flutterwave callback response:", response);
          if (response.status === "successful") {
            setIsSuccess(true);
          } else {
            throw new Error(
              `Payment failed: ${response.message || "Unknown error"}`
            );
          }
        },
        onclose: function () {
          console.log("Flutterwave modal closed");
          setIsProcessing(false);
        },
        meta: {
          test_mode: true,
        },
      };

      console.log("Initializing Flutterwave checkout with data:", paymentData);
      window.FlutterwaveCheckout(paymentData);
    } catch (error) {
      console.error("Flutterwave payment error:", error);
      setIsProcessing(false);
      alert(`Payment failed: ${error.message}`);
    }
  };

  // Add test function for NowPayments
  const testNowPaymentsConnection = async () => {
    try {
      console.log("Testing NowPayments connection...");
      console.log("API Key:", process.env.REACT_APP_NOWPAYMENTS_API_KEY);
      console.log("Sandbox Mode:", process.env.REACT_APP_NOWPAYMENTS_SANDBOX);

      const baseUrl =
        process.env.REACT_APP_NOWPAYMENTS_SANDBOX === "true"
          ? "https://api-sandbox.nowpayments.io/v1"
          : "https://api.nowpayments.io/v1";

      console.log("Base URL:", baseUrl);

      if (!process.env.REACT_APP_NOWPAYMENTS_API_KEY) {
        throw new Error("NowPayments API key is not defined");
      }

      const response = await fetch(`${baseUrl}/status`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_NOWPAYMENTS_API_KEY,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API Error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();
      console.log("NowPayments API Status:", data);
      return data;
    } catch (error) {
      console.error("NowPayments connection test failed:", error);
      throw error;
    }
  };

  // Add useEffect to test connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const status = await testNowPaymentsConnection();
        console.log("NowPayments API is working:", status);
      } catch (error) {
        console.error("NowPayments API test failed:", error);
        alert(
          "NowPayments API connection failed. Please check your API key and network connection."
        );
      }
    };

    testConnection();
  }, []);

  // Add useEffect to fetch available currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const baseUrl =
          process.env.REACT_APP_NOWPAYMENTS_SANDBOX === "true"
            ? "https://api-sandbox.nowpayments.io/v1"
            : "https://api.nowpayments.io/v1";

        const response = await fetch(`${baseUrl}/currencies`, {
          headers: {
            "x-api-key": process.env.REACT_APP_NOWPAYMENTS_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch currencies: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (data.currencies && Array.isArray(data.currencies)) {
          const formattedCurrencies = data.currencies.map((code) => ({
            code: code.toLowerCase(),
            name: getCurrencyName(code),
          }));

          // Sort currencies: popular ones first, then alphabetically
          const popularCurrencies = [
            "btc",
            "eth",
            "usdt",
            "usdc",
            "bnb",
            "xrp",
            "ada",
            "doge",
            "ltc",
          ];
          formattedCurrencies.sort((a, b) => {
            const aIndex = popularCurrencies.indexOf(a.code);
            const bIndex = popularCurrencies.indexOf(b.code);
            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;
            return a.name.localeCompare(b.name);
          });

          setAvailableCurrencies(formattedCurrencies);
          // Set BTC as default if available, otherwise use first currency
          setSelectedCrypto(
            formattedCurrencies.find((c) => c.code === "btc")?.code ||
              formattedCurrencies[0]?.code
          );
        }
      } catch (error) {
        console.error("Error fetching currencies:", error);
        // Fallback to default currencies
        const defaultCurrencies = [
          { code: "btc", name: "Bitcoin" },
          { code: "eth", name: "Ethereum" },
          { code: "usdt", name: "Tether" },
          { code: "usdc", name: "USD Coin" },
          { code: "bnb", name: "Binance Coin" },
        ];
        setAvailableCurrencies(defaultCurrencies);
        setSelectedCrypto("btc");
      }
    };

    // Helper function to get readable currency names
    const getCurrencyName = (code) => {
      const names = {
        btc: "Bitcoin",
        eth: "Ethereum",
        usdt: "Tether",
        usdterc20: "Tether (ERC20)",
        usdttrc20: "Tether (TRC20)",
        usdc: "USD Coin",
        ltc: "Litecoin",
        doge: "Dogecoin",
        bnb: "Binance Coin",
        bnbmainnet: "Binance Coin (BSC)",
        xrp: "Ripple",
        ada: "Cardano",
        sol: "Solana",
        dot: "Polkadot",
        trx: "TRON",
        dai: "DAI",
        busd: "Binance USD",
        link: "Chainlink",
        uni: "Uniswap",
        xmr: "Monero",
        algo: "Algorand",
        xlm: "Stellar",
        neo: "NEO",
        etc: "Ethereum Classic",
        waves: "Waves",
        okb: "OKB",
        ht: "Huobi Token",
        zec: "Zcash",
        dash: "Dash",
      };
      return names[code.toLowerCase()] || code.toUpperCase();
    };

    fetchCurrencies();
  }, []);

  const handleCryptoPayment = async () => {
    try {
      console.log("Starting NowPayments payment...");

      const baseUrl =
        process.env.REACT_APP_NOWPAYMENTS_SANDBOX === "true"
          ? "https://api-sandbox.nowpayments.io/v1"
          : "https://api.nowpayments.io/v1";

      console.log("Using NowPayments API URL:", baseUrl);

      if (!process.env.REACT_APP_NOWPAYMENTS_API_KEY) {
        throw new Error("NowPayments API key is not defined");
      }

      const paymentData = {
        price_amount: plans[selectedPlan].price,
        price_currency: "usd",
        pay_currency: selectedCrypto,
        order_id: `order-${Date.now()}`,
        order_description: `${selectedPlan} Plan Subscription`,
        ipn_callback_url: process.env.REACT_APP_PAYMENT_WEBHOOK_URL,
        success_url: process.env.REACT_APP_PAYMENT_SUCCESS_URL,
        cancel_url: process.env.REACT_APP_PAYMENT_CANCEL_URL,
      };

      console.log("Sending payment request to NowPayments:", paymentData);

      const response = await fetch(`${baseUrl}/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_NOWPAYMENTS_API_KEY,
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Payment API Error: ${errorData.message || response.statusText}`
        );
      }

      console.log("NowPayments response status:", response.status);
      const data = await response.json();
      console.log("NowPayments response data:", data);

      if (data.pay_address) {
        // Create a modern payment page with better UI
        const paymentPage = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Crypto Payment</title>
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
              <style>
                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }
                
                body {
                  font-family: 'Inter', sans-serif;
                  background: linear-gradient(125deg, #0f172a 0%, #1e293b 100%);
                  color: #fff;
                  margin: 0;
                  min-height: 100vh;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 20px;
                  position: relative;
                  overflow-x: hidden;
                }

                body::before,
                body::after {
                  content: '';
                  position: absolute;
                  width: 300px;
                  height: 300px;
                  border-radius: 50%;
                  filter: blur(100px);
                  opacity: 0.15;
                  animation: glow 10s ease-in-out infinite alternate;
                }

                body::before {
                  background: #3b82f6;
                  top: -100px;
                  left: -100px;
                }

                body::after {
                  background: #8b5cf6;
                  bottom: -100px;
                  right: -100px;
                }

                @keyframes glow {
                  0% { transform: scale(1); opacity: 0.15; }
                  50% { transform: scale(1.2); opacity: 0.2; }
                  100% { transform: scale(1); opacity: 0.15; }
                }

                .container {
                  max-width: 480px;
                  width: 100%;
                  background: rgba(30, 41, 59, 0.8);
                  backdrop-filter: blur(20px);
                  border-radius: 24px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  animation: fadeIn 0.5s ease-out;
                }

                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }

                .header {
                  padding: 32px;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                  text-align: center;
                  position: relative;
                }

                .logo {
                  width: 56px;
                  height: 56px;
                  margin-bottom: 16px;
                  border-radius: 12px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .title {
                  font-size: 28px;
                  font-weight: 600;
                  margin: 0;
                  color: #fff;
                  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .subtitle {
                  color: #94a3b8;
                  margin: 8px 0 0;
                  font-size: 15px;
                }

                .content {
                  padding: 32px;
                }

                .amount-container {
                  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
                  border: 1px solid rgba(59, 130, 246, 0.2);
                  padding: 20px;
                  border-radius: 16px;
                  margin-bottom: 24px;
                  transition: transform 0.2s;
                }

                .amount-container:hover {
                  transform: translateY(-2px);
                }

                .amount-label {
                  font-size: 14px;
                  color: #94a3b8;
                  margin-bottom: 4px;
                  display: flex;
                  align-items: center;
                }

                .amount {
                  font-size: 32px;
                  font-weight: 600;
                  color: #fff;
                  margin: 8px 0;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                }

                .amount-icon {
                  width: 24px;
                  height: 24px;
                  background-color: #fff;
                  border-radius: 50%;
                  padding: 4px;
                }

                .qr-container {
                  background: #fff;
                  padding: 24px;
                  border-radius: 16px;
                  width: fit-content;
                  margin: 0 auto 32px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                  position: relative;
                  transition: transform 0.2s;
                }

                .qr-container:hover {
                  transform: scale(1.02);
                }

                .qr-code {
                  display: block;
                  width: 220px;
                  height: 220px;
                }

                .qr-label {
                  position: absolute;
                  bottom: -12px;
                  left: 50%;
                  transform: translateX(-50%);
                  background: #3b82f6;
                  color: #fff;
                  padding: 6px 12px;
                  border-radius: 20px;
                  font-size: 12px;
                  font-weight: 500;
                  white-space: nowrap;
                }

                .address-container {
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 16px;
                  padding: 20px;
                  margin-bottom: 24px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .address-label {
                  font-size: 14px;
                  color: #94a3b8;
                  margin-bottom: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .network-badge {
                  background: rgba(34, 197, 94, 0.1);
                  color: #22c55e;
                  padding: 4px 8px;
                  border-radius: 6px;
                  font-size: 12px;
                  font-weight: 500;
                }

                .address {
                  background: rgba(0, 0, 0, 0.2);
                  border-radius: 12px;
                  padding: 16px;
                  font-family: monospace;
                  font-size: 14px;
                  word-break: break-all;
                  color: #e2e8f0;
                  margin: 0;
                  border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .copy-btn {
                  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                  color: #fff;
                  border: none;
                  padding: 14px 24px;
                  border-radius: 12px;
                  font-size: 15px;
                  font-weight: 500;
                  cursor: pointer;
                  width: 100%;
                  transition: all 0.2s;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                }

                .copy-btn:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }

                .copy-btn:active {
                  transform: translateY(0);
                }

                .timer {
                  text-align: center;
                  color: #94a3b8;
                  font-size: 14px;
                  margin: 24px 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                }

                .timer-digits {
                  background: rgba(255, 255, 255, 0.1);
                  padding: 4px 8px;
                  border-radius: 6px;
                  font-weight: 500;
                  color: #fff;
                }

                .info {
                  margin-top: 24px;
                  padding: 20px;
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 16px;
                  font-size: 14px;
                  color: #94a3b8;
                  line-height: 1.6;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .info ul {
                  margin: 12px 0;
                  padding-left: 24px;
                }

                .info li {
                  margin: 8px 0;
                }

                .status-badge {
                  position: absolute;
                  top: 24px;
                  right: 24px;
                  background: rgba(34, 197, 94, 0.1);
                  color: #22c55e;
                  padding: 6px 12px;
                  border-radius: 20px;
                  font-size: 13px;
                  font-weight: 500;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                }

                .pulse {
                  width: 8px;
                  height: 8px;
                  background: #22c55e;
                  border-radius: 50%;
                  position: relative;
                }

                .pulse::after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background: inherit;
                  border-radius: inherit;
                  animation: pulse 2s ease-out infinite;
                }

                @keyframes pulse {
                  0% { transform: scale(1); opacity: 1; }
                  100% { transform: scale(3); opacity: 0; }
                }

                @media (max-width: 480px) {
                  .container {
                    border-radius: 0;
                  }
                  .content {
                    padding: 24px;
                  }
                  .qr-code {
                    width: 180px;
                    height: 180px;
                  }
                  .amount {
                    font-size: 24px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://iili.io/3aStpLX.png" alt="Logo" class="logo">
                  <h1 class="title">Crypto Payment</h1>
                  <p class="subtitle">Complete your payment to continue</p>
                  <div class="status-badge">
                    <div class="pulse"></div>
                    Awaiting Payment
                  </div>
                </div>
                <div class="content">
                  <div class="amount-container">
                    <div class="amount-label">Send exactly</div>
                    <div class="amount">
                      <img src="https://cryptologos.cc/logos/${data.pay_currency.toLowerCase()}-${data.pay_currency.toLowerCase()}-logo.svg" 
                           onerror="this.src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg'"
                           class="amount-icon" 
                           alt="${data.pay_currency}">
                      ${data.pay_amount} ${data.pay_currency.toUpperCase()}
                    </div>
                    <div class="amount-label" style="margin-top: 8px;">≈ $${
                      plans[selectedPlan].price
                    } USD</div>
                  </div>

                  <div class="qr-container">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${
                      data.pay_address
                    }" 
                         alt="Payment QR Code"
                         class="qr-code">
                    <div class="qr-label">Scan to pay</div>
                  </div>

                  <div class="address-container">
                    <div class="address-label">
                      <span>${data.pay_currency.toUpperCase()} Address</span>
                      <span class="network-badge">Network: ${
                        data.network || "Auto"
                      }</span>
                    </div>
                    <p class="address">${data.pay_address}</p>
                  </div>

                  <button onclick="copyAddress(this)" class="copy-btn" data-address="${
                    data.pay_address
                  }">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                    </svg>
                    Copy Address
                  </button>

                  <div class="timer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    Payment window closes in <span id="timer" class="timer-digits">30:00</span>
                  </div>

                  <div class="info">
                    <strong style="color: #fff; display: flex; align-items: center; gap: 8px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Important Information
                    </strong>
                    <ul>
                      <li>Send only ${data.pay_currency.toUpperCase()} to this address</li>
                      <li>Make sure to send the exact amount shown</li>
                      <li>Payment will be processed automatically once confirmed</li>
                      <li>Transaction may take 10-30 minutes to be confirmed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <script>
                let timeLeft = 30 * 60; // 30 minutes in seconds
                const timerDisplay = document.getElementById('timer');
                
                function updateTimer() {
                  const minutes = Math.floor(timeLeft / 60);
                  const seconds = timeLeft % 60;
                  timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
                  
                  if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    alert('Payment window has expired');
                    window.close();
                    return;
                  }
                  
                  timeLeft--;
                }

                // Update immediately and then every second
                updateTimer();
                const timerInterval = setInterval(updateTimer, 1000);

                // Cleanup on page unload
                window.addEventListener('unload', () => clearInterval(timerInterval));

                // Copy address function
                function copyAddress(button) {
                  const address = button.dataset.address;
                  navigator.clipboard.writeText(address);
                  button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Address Copied!';
                  setTimeout(() => {
                    button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>Copy Address';
                  }, 2000);
                }
              </script>
            </body>
          </html>
        `;

        // Open payment page in a new window
        const paymentWindow = window.open("", "_blank");
        paymentWindow.document.write(paymentPage);
        paymentWindow.document.close();
      } else {
        console.error("Payment address not found in response:", data);
        throw new Error("Payment address not found in response");
      }
    } catch (error) {
      console.error("NowPayments error:", error);
      setIsProcessing(false);
      alert(`Payment failed: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted, starting payment process...");
    setIsProcessing(true);

    try {
      if (paymentMethod === "flutterwave") {
        console.log("Selected payment method: Flutterwave");
        await handleFlutterwavePayment();
      } else if (paymentMethod === "crypto") {
        console.log("Selected payment method: NowPayments");
        await handleCryptoPayment();
      }
    } catch (error) {
      console.error("Payment submission error:", error);
      setIsProcessing(false);
      alert(`Payment failed: ${error.message}`);
    }
  };

  // Add useEffect to handle NowPayments callback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get("payment_status");
    const paymentId = params.get("payment_id");

    if (paymentStatus === "success" && paymentId) {
      setIsSuccess(true);
    }
  }, []);

  // Don't show checkout for free plan
  if (selectedPlan === "Free") {
    window.location.href = "/";
    return null;
  }

  // Update the payment button text to show converted amount
  const getPaymentButtonText = () => {
    if (isProcessing) {
      return "Processing...";
    }
    const convertedAmount = plans[selectedPlan].price * exchangeRate;
    return `Pay ${convertedAmount.toFixed(2)} ${currencyCode}`;
  };

  return (
    <div className="min-h-screen bg-black text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Plan</span>
                <span className="font-medium">{selectedPlan}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Price</span>
                <div className="text-right">
                  <span className="text-2xl font-bold">
                    ${plans[selectedPlan].price}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    ${plans[selectedPlan].originalPrice}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl font-bold">
                    ${plans[selectedPlan].price}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Features Included:</h3>
                <ul className="space-y-2">
                  {plans[selectedPlan].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Telephone
                </label>
                <div className="flex">
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleTelephoneChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Phone number"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.country
                    ? `Format: ${
                        countries.find((c) => c.code === formData.country)
                          ?.dialCode
                      } XXX XXX XXXX`
                    : "Select country first"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City, State/Province"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label
                    className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      paymentMethod === "flutterwave"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="flutterwave"
                      checked={paymentMethod === "flutterwave"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="https://www.pymnts.com/wp-content/uploads/2023/08/flutterwave-big.jpg"
                          alt="Flutterwave"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-medium">Flutterwave</span>
                        <p className="text-sm text-gray-400">
                          Pay with card, bank transfer, or mobile money
                        </p>
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      paymentMethod === "crypto"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="crypto"
                      checked={paymentMethod === "crypto"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="https://developers.cardano.org/img/devblog/nowpayments-white.png"
                          alt="NowPayments"
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">Crypto Payment</span>
                        <p className="text-sm text-gray-400">
                          Pay with Bitcoin, Ethereum, or other cryptocurrencies
                        </p>
                        {paymentMethod === "crypto" && (
                          <div className="mt-4 space-y-4">
                            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Select Cryptocurrency
                              </label>
                              <div className="relative">
                                <select
                                  value={selectedCrypto}
                                  onChange={(e) =>
                                    setSelectedCrypto(e.target.value)
                                  }
                                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white appearance-none transition-colors duration-200 hover:border-gray-600"
                                >
                                  {availableCurrencies.map((currency) => (
                                    <option
                                      key={currency.code}
                                      value={currency.code}
                                      className="bg-gray-800 text-white py-2"
                                    >
                                      {currency.name} (
                                      {currency.code.toUpperCase()})
                                    </option>
                                  ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                                <span>Network Fee:</span>
                                <span className="font-medium">Included</span>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-gray-700">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-300">
                                  Selected Payment:
                                </span>
                                <span className="font-medium text-white">
                                  {
                                    availableCurrencies.find(
                                      (c) => c.code === selectedCrypto
                                    )?.name
                                  }
                                </span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Amount:</span>
                                  <span className="font-medium text-white">
                                    ${plans[selectedPlan].price} USD
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Plan:</span>
                                  <span className="font-medium text-white">
                                    {selectedPlan}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                              <h4 className="text-sm font-medium text-gray-300 mb-3">
                                Payment Security
                              </h4>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center text-gray-400 text-sm">
                                  <svg
                                    className="h-5 w-5 mr-2 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                  </svg>
                                  Secure Transaction
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                  <svg
                                    className="h-5 w-5 mr-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                                    />
                                  </svg>
                                  Encrypted Payment
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center mb-4">
                      Trusted by millions worldwide
                    </p>
                    <div className="flex justify-center">
                      <img
                        src={partners}
                        alt="Payment Partners"
                        className="max-w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Secure payments powered by industry leaders
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing}
                className={`w-full mt-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center">
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      {getPaymentButtonText()}
                      <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </motion.button>

              <p className="mt-4 text-sm text-gray-400 text-center">
                By proceeding with the payment, you agree to our{" "}
                <a href="/terms" className="text-blue-400 hover:text-blue-300">
                  Terms of Service
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
