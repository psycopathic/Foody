"use client";
import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/store/store";
const Navbar = () => {
  const cart = useStore((store)=>store.cart);
  const [menuOpen, setMenuOpen] = useState(true);
  const { setTheme } = useTheme();
  // if (!mounted) return null;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Left section: Logo and Nav */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/" className="font-bold text-lg">
            Foodie
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/menu" className="text-sm font-medium hover:underline">
              Menu
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="/admin/menu/create"
              className="text-sm font-medium hover:underline"
            >
              Admin
            </Link>
          </nav>
        </div>

        {/* Right section: Search + Cart + Auth */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Search input (hidden on small screens) */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[160px] md:w-[250px]"
            />
          </div>

          {/* Dark mode toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          {/* User Auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          <Link
            href="/menu"
            className="block text-sm font-medium hover:underline "
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium hover:underline"
          >
            About
          </Link>
          <Link
            href="/admin/menu/create"
            className="block text-sm font-medium hover:underline"
          >
            Admin
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search menu..." className="pl-10 w-full" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
