"use client";
import { primaryTheme } from "@/constant/theme1";
import { Theme, ThemeProvider } from "@mui/material";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocaleContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const defaultThemeContext: LocaleContextType = {
  theme: primaryTheme,
  setTheme: () => {}, // Dummy setter function
};

const ThemeContext = createContext<LocaleContextType>(defaultThemeContext);

export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(primaryTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
