import React from "react";
function StatsCard({ iconSrc, title, description, className }) {
  return (
    <div className={`relative bg-white rounded-lg p-10 pt-24 ${className}`}>
      <div className="absolute top-0 left-20 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center rounded-full bg-[#3b3054]">
        <img src={iconSrc} alt="icon" />
      </div>
      <h1 className="text-4xl font-bold text-left mb-6">{title}</h1>
      <p className="text-2xl font-semibold text-gray-400 text-left">
        {description}
      </p>
    </div>
  );
}

export default StatsCard;
