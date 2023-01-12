import React from "react";
import Clock from "./Clock";

const Home = () => {
  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
        <Clock cityKey={"stockholm"} />
        <Clock cityKey={"london"} />
      </div>
    </main>
  );
};

export default Home;
