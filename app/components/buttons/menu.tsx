'use client'
import React from 'react';

const Button = () => {
  return (
    <button className="w-[50px] h-[40px] border-black border relative hover:after">
      <span className="w-[90%] h-[2px] bg-black absolute left-0 top-[12.5px] transition-all ease-linear duration-200"></span>
      <span className="w-[60%] h-[2px] bg-black absolute left-0 top-[22.5px] transition-all ease-linear duration-200"></span>
      <style jsx>{`
        button:hover span:nth-child(1) {
          top: 17.5px;
        }
        button:hover span:nth-child(2) {
          top: 17.5px;
          width: 90%
        }
      `}</style>
    </button>
  );
};

export default Button;
