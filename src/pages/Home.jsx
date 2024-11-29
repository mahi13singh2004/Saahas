import React from 'react';
import safe from '../assets/safe.jpg';

const Card = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row items-center overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/3 animate-fade-in-left">
          <img
            src={safe}
            alt="Card"
            className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/3 p-4 text-center animate-fade-in-right">
          <h2 className="text-7xl font-bold mb-2 animate-bounce">Welcome to SaaHas</h2>
          <p className="font-semibold text-4xl mt-7 text-blue-700 opacity-0 animate-fade-in-up">
            Your Safety is our priority
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
