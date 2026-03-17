import { useState, useEffect } from "react";

// set-state-in-effect: non-empty dependency array [value] — should error but DOES NOT on linux CI
export function EffectWithDeps({value}: {value: number}) {
  const [x, setX] = useState(0);
  useEffect(() => { setX(value); }, [value]);
  return x;
}