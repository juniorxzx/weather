const primaryColor = "hsl(180, 70%, 40%)";
const secondaryColor = "hsl(180, 50%, 30%)";

export const darkTheme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    background: "hsl(220, 40%, 8%)",
    muted: "hsl(220, 20%, 18%)",
    text: "hsl(210, 30%, 92%)",
  },
  boxShadow: {
    default: "0px 4px 8px rgba(0, 0, 0, 0.5)",
  },
};

export const lightTheme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    background: "hsl(0, 0%, 98%)",
    muted: "hsl(220, 15%, 85%)",
    text: "hsl(220, 15%, 15%)",
  },
  boxShadow: {
    default: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export type ThemeType = typeof lightTheme;
