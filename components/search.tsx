"use client";
import React from "react";
import { Input } from "@/components/ui/input";

// NEED TO SETUP SEARC FUNCTIONALITY

type Props = {
  filter?: boolean;
};

export default function Searchbar(props: Props) {
  const { filter } = props;
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
        filter={filter}
      />
    </form>
  );
}
