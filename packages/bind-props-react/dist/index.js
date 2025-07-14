// src/index.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function bindProps(Component, boundProps) {
  function ResultComponent(props) {
    const mergedProps = { ...boundProps, ...props };
    return /* @__PURE__ */ jsxDEV(Component, {
      ...mergedProps
    }, undefined, false, undefined, this);
  }
  return ResultComponent;
}
export {
  bindProps as default
};
