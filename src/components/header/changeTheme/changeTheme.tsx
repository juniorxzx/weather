"use client";
import React, { useContext, useEffect } from "react";
import { ThemeContainer } from "./changeTheme.styled";
import { useThemeContext } from "@/store/globalContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <ThemeContainer onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌙"}
    </ThemeContainer>
  );
};

export default ChangeTheme;
