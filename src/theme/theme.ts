export const darkTheme = {
  colors: {
    primary: "#d8e2dc",
    secondary: "#555",

    background: "#001219",
    muted: "#343a40",
    text: "#edede9",
  },
  boxShadow: {
    default: "0px 2px 2px rgba(115, 115, 115, 0.5)",
  },
};
export const lightTheme = {
  colors: {
    primary: "#31572c",
    secondary: "#6c757d",

    background: "#ffffff",
    muted: "#f8f9fa",
    text: "#212529",
  },
  boxShadow: {
    default: "0px 4px 4px rgba(0, 0, 0, 0.55)",
  },
};


export type ThemeType = typeof lightTheme;