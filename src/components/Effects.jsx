/** @format */

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Effects = () => {
  const [selectedEffect, setSelectedEffect] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  const effects = [
    { id: "robot", name: "Robot", icon: "🤖" },
    { id: "alien", name: "Alien", icon: "👽" },
    { id: "monster", name: "Monster", icon: "👹" },
    { id: "chipmunk", name: "Chipmunk", icon: "🐿️" },
    { id: "echo", name: "Echo", icon: "🔊" },
    { id: "reverb", name: "Reverb", icon: "🎵" },
  ];

  useEffect(() => {
    // Initialize audio context
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    gainNodeRef.current = audioContextRef.current.createGain();
    gainNodeRef.current.connect(audioContextRef.current.destination);

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const startEffect = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sourceNodeRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      sourceNodeRef.current.connect(gainNodeRef.current);
      setIsPlaying(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopEffect = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    setIsPlaying(false);
  };

  const applyEffect = (effectId) => {
    setSelectedEffect(effectId);
    // Here you would implement the actual audio effect processing
    // This is a placeholder for the effect implementation
    console.log(`Applying effect: ${effectId}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Voice Effects</h1>
          <p className="text-gray-400">
            Transform your voice with real-time effects
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {effects.map((effect) => (
            <motion.button
              key={effect.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => applyEffect(effect.id)}
              className={`p-6 rounded-lg flex flex-col items-center justify-center ${
                selectedEffect === effect.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <span className="text-4xl mb-2">{effect.icon}</span>
              <span className="text-sm font-medium">{effect.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isPlaying ? stopEffect : startEffect}
            className={`px-8 py-3 rounded-lg font-medium ${
              isPlaying
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isPlaying ? "Stop Effect" : "Start Effect"}
          </motion.button>
        </div>

        {selectedEffect && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-gray-800 rounded-lg max-w-2xl mx-auto text-center"
          >
            <p className="text-gray-300">
              Selected effect:{" "}
              <span className="font-medium text-white">
                {effects.find((e) => e.id === selectedEffect)?.name}
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Effects;
