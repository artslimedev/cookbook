import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  filter?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, filter, ...props }, ref) => {
    return (
      <div className="flex w-full items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "search" && (
          <>
            <div className={`${filter ? `md:block` : "hidden sm:block"}`}>
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="meal">Meal</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="ingredient">Ingredient</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className={`${!filter && "bg-white rounded-r-full"}`}>
              <Button
                variant={"other"}
                className={`rounded-r-full ${!filter && "rounded-l-full md:rounded-l-none z-10"} `}
                type="submit"
              >
                <span className="hidden sm:block">Search</span>
                <FaSearch className="block sm:hidden" />
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
