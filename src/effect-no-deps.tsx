import { useState, useEffect } from "react";

// set-state-in-effect: no dependency array — should error
export function EffectNoDeps() {
  const [x, setX] = useState(0);
  useEffect(() => { setX(1); });
  return x;
}