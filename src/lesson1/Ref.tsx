// Moi lan component re render thi tat ca cac bien ham trong component se duoc tao ra pham vi moi
// Lesson1: useRef luu tham chieu cua mot bien hay mot ham ben ngoai

import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

const Ref = () => {
  const [count, setCount] = useState<number>(60);
  const [num, setNum] = useState<string>();

  const timeID = useRef<number>();
  const refInput = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | undefined>) => {
    setNum(e.target.value);
  };

  const setCountStart = () => {
    if (num) {
      setCount(parseInt(num));
      setNum("");
      // Set focus with useRef
      refInput.current?.focus();
    }
  };

  const handleStart = () => {
    timeID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeID.current);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeInput}
        ref={refInput}
        value={num}
      />
      <button onClick={setCountStart}>Set Time</button>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Ref;
