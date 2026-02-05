import { useState } from "react";

export default function App({value}: {value: number}) {
  const [count, setCount] = useState(0);
  setCount(value); // Infinite loop!
  return <div>{count}</div>;
}