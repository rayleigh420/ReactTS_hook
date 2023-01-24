// Moi lan component re render thi tat ca cac bien ham trong component se duoc tao ra pham vi moi
// Lesson1: useRef luu tham chieu cua mot bien hay mot ham ben ngoai

import { useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState<number>(60);

  let timeID = useRef();

  const handleStart = () => {
    // timeID = setInterval(() => {
    //     setCount(prev => prev + 1)
    // }, 1000)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
};

export default Ref;
