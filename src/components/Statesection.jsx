import React from 'react';

const Statesection = () => {
    return (
        <div>
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="container mx-auto px-10 flex justify-around items-center h-[150px] text-white text-center">
          <div>
            <h2 className="text-5xl font-bold">50K+</h2>
            <p className="opacity-80">Active Users</p>
          </div>
          <div className="border-1 border-white/30 h-16"></div>
          <div>
            <h2 className="text-5xl font-bold">200+</h2>
            <p className="opacity-80">Premium Tools</p>
          </div>
          <div className="border-1 border-white/30 h-16"></div>
          <div>
            <h2 className="text-5xl font-bold">4.9</h2>
            <p className="opacity-80">Rating</p>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Statesection;