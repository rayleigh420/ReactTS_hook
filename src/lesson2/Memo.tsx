import { useState } from "react";
import Content from "../components/Content";

const Memo = () => {
  const [count, setCount] = useState<number>(60);

  return (
    <div>
      <Content name="Le Nhat Duy" />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Memo;
