import { useEffect, useRef } from "react";

const usePrevious = (value: any) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;