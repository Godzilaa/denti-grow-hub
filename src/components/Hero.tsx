
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-accent/30 section-padding pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Tech Solutions <span className="text-primary">Designed</span> for Modern Dental Practices
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              Streamline your dental practice operations and enhance patient experience with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base">
                <a href="#demo">Book a Free Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent text-base">
                <a href="#services">Explore Solutions</a>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 p-6 animate-fade-in-right">
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-8 bg-primary/20 rounded-lg w-40 mt-4"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary/20 w-full h-full rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
