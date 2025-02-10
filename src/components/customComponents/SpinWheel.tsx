"use client";

import { useState } from "react";
import Image from "next/image";

const prizes = [100, 500, 900, 160, 120, 700, 350, 60, 400, 320, 800, 200];

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(0);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    const randomSpin = Math.floor(Math.random() * 360) + 1800;

    setRotation(randomSpin);

    setTimeout(() => {
      const finalDegree = randomSpin % 360;
      const segmentSize = 360 / prizes.length;
      const winningIndex = Math.floor(finalDegree / segmentSize);
      setPrize(prizes[winningIndex]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">

      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl">
          Try your luck & spin the wheel
        </h1>
        <p className="text-lg mt-3">
          Spin the wheel now to win exciting <br /> rewards and test your luck!
        </p>

        <button
          onClick={spinWheel}
          disabled={spinning}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {spinning ? "Spinning..." : "Spin wheel for FREE"}
        </button>

        {prize !== null && (
          <p className="mt-4 text-xl font-semibold"> You won: {prize} points! 🎉</p>
        )}
      </div>

      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <div
          className="w-full h-full transition-transform duration-[3s] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <Image
            src="/wheel.png"
            alt="Spin Wheel"
            width={500} 
            height={500}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
