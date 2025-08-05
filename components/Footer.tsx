import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
   <footer className="bg-secondary text-secondary-foreground border-t py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        
        {/* Restaurant Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Gourmet</h3>
            <p className="text-sm">
              Authentic flavors, exceptional dining.
            </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-medium">Links</h4>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/menu" className="hover:underline">
              Menu
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="font-medium">Contact</h4>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>123 Food Street</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container w-full pt-8 mt-8 border-t text-center text-sm">
        © {new Date().getFullYear()} Gourmet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
