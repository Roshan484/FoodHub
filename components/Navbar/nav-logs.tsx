import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserProfile } from "./user-profile";
import { ThemeToggle } from "../ui/theme-toggle";
const Navlogs = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Input
          type="search"
          placeholder="Search for restaurants or cuisines"
          className="w-[200px] md:w-[300px] rounded-l-md"
        />
        <Button type="submit" size="icon" className=" rounded-r-md">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>

      <ThemeToggle />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search for restaurants or cuisines"
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <UserProfile />
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Shopping cart</span>
      </Button>
    </>
  );
};

export default Navlogs;
