import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 item-center justify-between px-4">
        <Link href="/" className="font-bold text-lg">
          Foody
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
