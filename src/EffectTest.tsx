import { useState, useEffect } from "react";

export default function EffectTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  });
  return <div>{count}</div>;
}