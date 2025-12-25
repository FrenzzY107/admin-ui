import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: {
    name: "theme-green",
    color: "#299D91",
  },
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    name: "theme-green",
    color: "#299D91",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
