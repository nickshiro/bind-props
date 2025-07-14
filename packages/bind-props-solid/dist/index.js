// src/index.tsx
import { createMemo } from "solid-js";
function bindProps(Component, boundProps) {
  function ResultComponent(allProps) {
    const merged = createMemo(() => ({
      ...boundProps,
      ...allProps
    }));
    return Component(merged());
  }
  return ResultComponent;
}
export {
  bindProps as default
};
