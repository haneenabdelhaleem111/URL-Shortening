import React from "react";

function StatsCard({ iconSrc, title, description, className }) {
  return (
    <div className={`relative bg-white rounded-lg p-6 pt-16 ${className}`}>
      {/* Icon */}
      <div className="absolute top-0 left-20 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-[#3b3054]">
        <img src={iconSrc} alt="icon" className="w-10 h-10" />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-left mb-4">{title}</h1>

      {/* Description */}
      <p className="text-base sm:text-lg font-semibold text-gray-400 text-left">
        {description}
      </p>
    </div>
  );
}

export default StatsCard;
