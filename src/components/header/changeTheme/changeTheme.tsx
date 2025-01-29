"use client";
import React, { useContext, useEffect } from "react";
import {
  BoxMode,
  MoonIcon,
  SunIcon,
  ThemeContainer,
} from "./changeTheme.styled";
import { useThemeContext } from "@/store/globalContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <ThemeContainer onClick={toggleTheme}>
      {theme === "dark" ? (
        <BoxMode
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.3 }}
        >
          <MoonIcon />
        </BoxMode>
      ) : (
        <BoxMode
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 35 }}
          transition={{ ease: "linear", duration: 0.3 }}
        >
          <SunIcon />
        </BoxMode>
      )}
    </ThemeContainer>
  );
};

export default ChangeTheme;
