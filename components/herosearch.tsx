import React from "react";
import Hero from "@/components/hero";
import Search from "./search";

export default function HeroSearch() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-row w-full justify-center">
        <div className="flex w-3/4 items-center mt-14">
          <Search />
        </div>
      </main>
    </>
  );
}
