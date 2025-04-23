"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Searchbar() {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;

    // Perform your search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <form className="w-full" action="" onSubmit={handleSearch}>
      <Input
        className="rounded-l-full rounded-r-none w-full"
        type="search"
        placeholder="Search"
      />
    </form>
  );
}
