import { useState, ChangeEvent } from "react";

const Context = () => {
  const [theme, setTheme] = useState<string>("white");

  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as string);
  };

  return (
    <>
      <select value={theme} onChange={handleChangeTheme}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
      </select>

      <p>Theme: {theme}</p>
    </>
  );
};

export default Context;
