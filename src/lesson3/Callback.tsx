import { useState, useCallback } from "react";
import Content from "../components/Content";

const Callback = () => {
  const [count, setCount] = useState<number>(60);

  // Neu khong dung react memo thi useCallback cung khong co tac dung
  const decrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Content name="Le Nhat Duy" increase={increase} decrease={decrease} />
      <h1>{count}</h1>
    </div>
  );
};

export default Callback;
