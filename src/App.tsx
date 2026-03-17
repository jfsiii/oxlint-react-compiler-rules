import { useState, useEffect } from "react";

// Violation 1: set-state-in-effect (no deps)
export function NoDeps() {
  const [x, setX] = useState(0);
  useEffect(() => { setX(1); });
  return x;
}

// Violation 2: set-state-in-effect (empty deps [])
export function EmptyDeps() {
  const [x, setX] = useState(0);
  useEffect(() => { setX(1); }, []);
  return x;
}

// Violation 3: set-state-in-effect (with deps [value])
export function WithDeps({value}: {value: number}) {
  const [x, setX] = useState(0);
  useEffect(() => { setX(value); }, [value]);
  return x;
}

// Violation 4: set-state-in-render
export default function App({value}: {value: number}) {
  const [count, setCount] = useState(0);
  setCount(value);
  return <div>{count}</div>;
}