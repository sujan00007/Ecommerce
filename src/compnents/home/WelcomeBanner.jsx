import React from "react";

function WelcomeBanner({ user }) {
  const name = user || "Guest";
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-xl shadow-lg p-5 md:p-8 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Welcome, <span className="font-bold">{name}</span>
        </h1>
        <p className="mt-1 text-sm md:text-base opacity-90">
          maximus decimus meridius
        </p>
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-semibold">
          {name[0]?.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;