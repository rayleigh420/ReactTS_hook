import { createContext, ReactNode, useState } from "react";

interface ThemeValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeDefaultValue: ThemeValue = {
  theme: "white",
  setTheme: (theme: string) => {},
};

export const ThemeContext = createContext<ThemeValue>(ThemeDefaultValue);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("white");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;