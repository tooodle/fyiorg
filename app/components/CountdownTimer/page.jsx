'use client'
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 w-screen justify-center py-8">
      {Object.keys(timeLeft).map((interval) => (
        <div
          key={interval}
          className="border-4 border-pink-700 rounded-lg p-4 aspect-square w-[72px] md:w-24 text-center flex flex-col items-center justify-center"
        >
          <p className="md:text-2xl text-lg font-semibold text-pink-700">{timeLeft[interval]}</p>
          <p className="capitalize text-sm md:text-base">{interval}</p>

        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
