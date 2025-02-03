const primaryColor = "#a2d2ff";
const secondaryColor = "#c0fdff";
export const darkTheme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    background: "hsl(210, 25%, 10%)",
    surface: "hsl(215, 20%, 18%)",
    muted: "#a7bed3",
    text: "#FFF",
    highlight: "hsl(30, 90%, 55%)",
    gradient: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
  },
  shadow: {
    default: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export const lightTheme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    background: "hsl(0, 0%, 98%)",
    surface: "hsl(0, 0%, 100%)",
    muted: "hsl(210, 10%, 60%)",
    text: "hsl(210, 30%, 20%)",
    highlight: "hsl(30, 90%, 55%)",
    gradient: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
  },
  shadow: {
    default: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    inner: "inset 0px 1px 2px rgba(0, 0, 0, 0.05)",
  },
};

export type ThemeType = typeof lightTheme;
