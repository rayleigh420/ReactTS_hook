import { useState, ChangeEvent, useContext } from "react";
import Paragraph from "../components/Paragraph";
import { ThemeContext } from "../Context/ThemeProvider";

const Context = () => {
  const [background, setBackground] = useState<string>("white");
  const { setTheme } = useContext(ThemeContext);

  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setBackground(e.target.value as string);
    setTheme(e.target.value as string);
  };

  return (
    <>
      <select value={background} onChange={handleChangeTheme}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
      </select>

      <Paragraph />
    </>
  );
};

export default Context;
