// src/Dashboard.js
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // Step 3: Using useState to manage the layout mode and user preferences
  const [isCompact, setIsCompact] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 4: Using useEffect to apply user preferences from localStorage
  useEffect(() => {
    const storedCompactMode = JSON.parse(localStorage.getItem("isCompact"));
    const storedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));

    if (storedCompactMode !== null) setIsCompact(storedCompactMode);
    if (storedDarkMode !== null) setIsDarkMode(storedDarkMode);
  }, []);

  // Step 5: Using useEffect to save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("isCompact", JSON.stringify(isCompact));
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isCompact, isDarkMode]);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>Dashboard</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <button onClick={() => setIsCompact(!isCompact)}>
          Toggle {isCompact ? "Expanded" : "Compact"} View
        </button>
      </header>
      <main className={isCompact ? "compact" : "expanded"}>
        <section className="panel">Panel 1</section>
        <section className="panel">Panel 2</section>
        <section className="panel">Panel 3</section>
      </main>
    </div>
  );
};

export default Dashboard;
