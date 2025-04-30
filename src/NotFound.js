import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Oops! Page not found 🚧</p>
        <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
