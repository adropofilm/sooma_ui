import React from "react";
import heroImg from "../../../../assets/hero.png";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-4/5 mx-auto mt-10 flex flex-row">
        <div>
          <h1 className="text-3xl font-bold font-midnight">
            Battle your friends
          </h1>
          <p className="text-xl">in the ultimate programming trivia</p>
          <button className="bg-gradient-to-r from-purple to-elephant h-10 w-40 rounded-lg text-white font-bold shadow-lg shadow-midnight-500/40">
            Start a Game
          </button>
        </div>
        <img src={heroImg} alt="" className="w-60" />
      </div>
    </section>
  );
};
