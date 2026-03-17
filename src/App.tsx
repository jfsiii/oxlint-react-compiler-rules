import { useState, useEffect } from "react";

// This one SHOULD be caught (no deps)
export function NoDeps() {
  const [x, setX] = useState(0);
  useEffect(() => { setX(1); });
  return x;
}

// This one SHOULD ALSO be caught (with deps) but is NOT on CI
export function WithDeps({value}: {value: number}) {
  const [x, setX] = useState(0);
  useEffect(() => { setX(value); }, [value]);
  return x;
}

// Original test case (set-state-in-render)
export default function App({value}: {value: number}) {
  const [count, setCount] = useState(0);
  setCount(value); // Infinite loop!
  return <div>{count}</div>;
}