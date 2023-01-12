import React from "react";
import { timeZones } from "./timeZones";
import { Routes, Route, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
const SingleClock = () => {
  const [time, setTime] = useState();
  const { cityKey } = useParams();
  const { city, timeZone, country } = timeZones[cityKey];

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex justify-center items-center p-10">
      <div className="flex justify-center items-center flex-col bg-green-400 p-20 rounded-lg">
        <div className="font-mono  font-medium text-2xl bg-zinc-100 p-4 rounded-2xl">
          {country}, {city}
        </div>
        <br />
        <div className="font-bold text-6xl ">{time}</div>
      </div>
    </main>
  );
};

export default SingleClock;
