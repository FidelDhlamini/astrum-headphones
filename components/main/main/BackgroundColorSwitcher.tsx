"use client"

import React, { useEffect } from "react";

const BackgroundColorSwitcher: React.FC = () => {
  useEffect(() => {
    const colors = ["bg-black", "bg-neutral-950", "bg-gray-950"];
    let currentIndex = 0;

    const changeBackgroundColor = () => {
      const nextIndex = (currentIndex + 1) % colors.length;
      document.body.classList.remove(colors[currentIndex]);
      document.body.classList.add(colors[nextIndex]);
      currentIndex = nextIndex;
    };

    const interval = setInterval(changeBackgroundColor, 10000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default BackgroundColorSwitcher;
