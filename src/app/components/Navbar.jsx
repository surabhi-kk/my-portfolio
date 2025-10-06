"use client";

import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#skill", label: "Skill" },
    { id: "#project", label: "Project" },
    // { id: "#contact", label: "Contact" }, // optional
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
      threshold: 0.6, // section must be 60% in view
    });

    // Observe each section
    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#00008B] text-white h-[12vh] flex items-center px-20">
      <div className="w-full flex justify-between items-center">
        {/* Left: Portfolio title */}
        <div className="text-3xl font-bold">portfolio</div>

        {/* Right: Navigation links */}
        <ul className="flex gap-8 list-none text-xl">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-blue-500 hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              <a href={item.id}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
