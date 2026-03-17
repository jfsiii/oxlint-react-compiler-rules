import { useState } from "react";

// set-state-in-render: setState called during render — should error
export default function SetStateInRender({value}: {value: number}) {
  const [count, setCount] = useState(0);
  setCount(value);
  return <div>{count}</div>;
}