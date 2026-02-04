import React from "react";

function WelcomeBanner({ user }) {
  const name = user || "Guest";
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl p-6 md:p-10 flex items-center justify-between gap-4 border border-white/10">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Welcome, <span className="font-extrabold text-yellow-300">{name}</span>
        </h1>
        <p className="mt-2 text-base md:text-lg text-white/90 font-medium">
          maximus decimus meridius
        </p>
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-white/50">
          {name[0]?.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;