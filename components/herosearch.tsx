import React from "react";
import Hero from "@/components/hero";
import Search from "./search";

type Props = {
  filter?: boolean;
};

export default function HeroSearch(props: Props) {
  const { filter } = props;
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-row w-full justify-center">
        <div className="flex w-full md:w-3/4 items-center mt-14">
          <Search filter={filter} />
        </div>
      </main>
    </>
  );
}
