import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

const Paragraph = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>Theme: {theme}</p>
      <p style={{ backgroundColor: `${theme}` }}>
        Hello, my name is Le Nhat Duy
      </p>
    </>
  );
};

export default Paragraph;
