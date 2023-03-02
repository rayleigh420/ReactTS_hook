import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

interface ContentProps {
  name: string;
  increase?: () => void;
  decrease?: () => void;
}

const Content = ({ name, increase, decrease }: ContentProps) => {
  const numRender = useRef<number>(0);

  numRender.current = numRender.current + 1;

  let content: JSX.Element | undefined = <div></div>;
  if (typeof increase !== "undefined") {
    content = (
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    );
  }

  return (
    <>
      <h3>Hi! {name}</h3>
      <h2>Full-stack Developer (Re-renders: {numRender.current})</h2>
      {content && content}
    </>
  );
};

export default React.memo(Content);
