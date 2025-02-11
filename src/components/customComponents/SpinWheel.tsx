"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
          🎡 Try Your Luck & Spin the Wheel!
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Spin now to win **exciting rewards** and test your luck!
        </p>

        <button
          onClick={spinWheel}
          disabled={spinning}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full 
            hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {spinning ? "Spinning..." : "Spin for FREE 🎉"}
        </button>

        {prize !== null && (
          <p className="mt-4 text-xl font-semibold text-green-600">
            🎉 You won: <span className="font-bold">{prize} points!</span>
          </p>
        )}
      </div>

      <div className="relative w-80 h-80 md:w-96 md:h-96 shadow-none">
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full shadow-none"
        >
          <Image
            src="/wheel.png"
            alt="Spin Wheel"
            width={500}
            height={500}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SpinWheel;
