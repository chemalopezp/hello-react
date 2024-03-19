import React, {
  useEffect,
  useRef,
  EffectCallback,
  DependencyList,
} from "react";

// Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.
export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirstTime = useRef<boolean>(true);
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      return effect();
    }
  }, deps);
}

// to try your code on the right panel
// export App() component like below

export function App() {
  return <div>BFE.dev</div>;
}
