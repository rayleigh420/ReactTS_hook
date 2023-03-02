import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const Content = ({ name }: { name: string }) => {
  const numRender = useRef<number>(0);

  numRender.current = numRender.current + 1;

  return (
    <>
      <h3>Hi! {name}</h3>
      <h2>Full-stack Developer (Re-renders: {numRender.current})</h2>
    </>
  );
};

export default React.memo(Content);
