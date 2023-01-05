import { useState } from "react";
import { useEffect, useRef } from "react";

export function useObserver(config = {}) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(
    new IntersectionObserver(observedEntries => {
      setEntries(observedEntries);
    }, config)
  );

  useEffect(() => {
    const { current: currentObserver } = observer;

    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach(el => currentObserver.observe(el));
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return { observer: observer.current, setElements, entries };
}
