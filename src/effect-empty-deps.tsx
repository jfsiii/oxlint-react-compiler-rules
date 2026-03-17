import { useState, useEffect } from "react";

// set-state-in-effect: empty dependency array [] — should error
export function EffectEmptyDeps() {
  const [x, setX] = useState(0);
  useEffect(() => { setX(1); }, []);
  return x;
}