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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
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
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Search Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="meal">Meal</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="ingredient">Ingredient</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant={"other"}
              className="rounded-r-full rounded-l-none "
              type="submit"
            >
              Search
            </Button>
          </>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
