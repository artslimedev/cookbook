import Hero from "@/components/hero";
import Search from "../components/search";

// NEED TO SET UP THE SEARCH FUNCTIONALITY

export default async function Home() {
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
