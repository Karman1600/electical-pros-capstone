"use client"; // Ensure this component is client-side

import React, { useContext } from 'react';
import { ThemeContext } from '../context/themes'; // Ensure this path is correct

const Mode = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleMode} className="text-white">
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default Mode;
