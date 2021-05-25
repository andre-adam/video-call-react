/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const useDebounce = (effect: () => void | undefined | Promise<void>, delay: number, deps: any[] = []) => {
  useEffect(() => {
    const handler = setTimeout(effect, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, ...deps]);
};

export default useDebounce;
