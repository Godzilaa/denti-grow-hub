
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">
            DentalTech<span className="text-gray-900">Pro</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-primary font-medium transition">
            Services
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-primary font-medium transition">
            Benefits
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition">
            Testimonials
          </a>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-accent">
            <a href="#contact">Contact Us</a>
          </Button>
          <Button asChild>
            <a href="#demo">Request Demo</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 border-t">
          <div className="flex flex-col gap-4">
            <a
              href="#services"
              className="text-gray-700 py-2 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="text-gray-700 py-2 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 py-2 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-accent w-full"
            >
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </a>
            </Button>
            <Button asChild className="w-full">
              <a href="#demo" onClick={() => setIsMenuOpen(false)}>
                Request Demo
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
