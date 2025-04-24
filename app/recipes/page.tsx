import React from "react";
import HeroSearch from "@/components/herosearch";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Vegan",
  "Seafood",
  "Poultry",
];

export default function Recipes() {
  return (
    <>
      <HeroSearch />
      <div className="flex flex-wrap gap-4 justify-center sm:gap-6 lg:gap-x-8 sm:gap-y-6 lg:gap-y-8 w-full lg:justify-evenly mt-14">
        {categories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col justify-center text-center bg-white/40 rounded-2xl p-6 h-32
                 w-[150px] md:basis-[30%] lg:basis-[30%] flex-grow flex-shrink text-2xl font-medium"
          >
            {category}
          </div>
        ))}
      </div>
    </>
  );
}
