import React, { useState, useContext } from "react";

const ThemeCtx = React.createContext({
  dark: false,
  switchTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeCtx);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeCtx");
  }

  return context;
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false);

  const switchTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeCtx.Provider value={{ dark, switchTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};
