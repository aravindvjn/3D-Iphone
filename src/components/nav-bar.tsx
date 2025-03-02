import React from "react";
import { BsApple } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="flex fixed left-0 w-full top-0 items-center justify-between px-5 py-2 text-[14px] bg-foreground text-background">
      <div>
        <BsApple />
      </div>
      <ul className="flex gap-[30px] items-center">
        <li>Home</li>
        <li>Store</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
      </ul>
    </nav>
  );
};

export default NavBar;
