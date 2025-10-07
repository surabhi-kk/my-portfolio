"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Optional: hamburger and close icons

function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false); // NEW: controls mobile menu

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#skill", label: "Skill" },
    { id: "#project", label: "Project" },
  ];

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
    });

    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#00008B] text-white h-[12vh] flex items-center px-6 sm:px-10 md:px-20">
      <div className="w-full flex justify-between items-center">
        {/* Left: Logo or Title */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 md:gap-8 list-none text-lg md:text-xl">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              <a href={item.id}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#00008B] sm:hidden flex flex-col items-center gap-4 py-4 z-40 border-t border-blue-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className={`text-lg ${
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
              onClick={() => setMenuOpen(false)} // Close on click
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
