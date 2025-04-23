import Hero from "@/components/hero";
import { Input } from "@/components/ui/input";
import Search from "../components/search";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

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
