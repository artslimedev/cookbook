"use client";
import React, { useState } from "react";
import HeroSearch from "@/components/herosearch";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "breakfast", link: "/" },
  { name: "lunch", link: "/" },
  { name: "dinner", link: "/" },
  { name: "vegan", link: "/" },
  { name: "seafood", link: "/" },
  { name: "poultry", link: "/" },
];

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState("");
  let loading = false;
  let data = null;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  const resetCategory = () => {
    console.log("Resetting category"); // Debugging
    setSelectedCategory("");
    // setData(null); // Clear the fetched data when resetting
  };

  // Fetch data when a category is selected
  // useEffect(() => {
  //   if (selectedCategory) {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         // Simulate a database call (replace this with your actual API/database call)
  //         const response = await fetch(`/api/data?category=${selectedCategory}`);
  //         const result = await response.json();
  //         setData(result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [selectedCategory]);

  return (
    <>
      <HeroSearch />
      {!selectedCategory && (
        <div className="flex flex-wrap gap-4 justify-center sm:gap-6 lg:gap-x-8 sm:gap-y-6 lg:gap-y-8 w-full lg:justify-evenly mt-14">
          {categories.map((category, i) => (
            <Button
              type="button"
              variant="none"
              onClick={() => handleCategoryClick(category.name)}
              key={`cat-${i + 1}`}
              className="flex flex-col justify-center text-center bg-white/40 rounded-2xl p-6 h-32
                 w-[150px] md:basis-[30%] lg:basis-[30%] flex-grow flex-shrink text-2xl font-medium capitalize"
            >
              <div key={i}>{category.name}</div>
            </Button>
          ))}
        </div>
      )}
      {selectedCategory && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold capitalize">{selectedCategory}</h2>
          <p className="text-lg">
            This is where the content for {selectedCategory} will go.
          </p>
          <Button
            onClick={resetCategory}
            className="bg-red-500 text-white rounded-full px-6 py-2"
          >
            Reset
          </Button>
        </div>
      )}
      {/* {selectedCategory && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold capitalize">{selectedCategory}</h2>
          {loading === false ? (
            <p>Loading...</p>
          ) : (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-2xl">
              {!data ? (
                // <pre>{JSON.stringify(data, null, 2)}</pre>
                <p>This is what data looks like.</p>
              ) : (
                <p>No data available for this category.</p>
              )}
            </div>
          )}
          <Button
            onClick={resetCategory}
            className="bg-red-500 text-white rounded-full px-6 py-2"
          >
            Reset
          </Button>
        </div>
      )} */}
    </>
  );
}
