/* Debounce hook copied from https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940?permalink_comment_id=3883788 */
import { useRef, useEffect, useCallback } from 'react';

const useDebounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
): ((...args: Parameters<F>) => ReturnType<F>) => {
  const timer = useRef<NodeJS.Timeout | null>();
  const savedFunc = useRef<F | null>(func);

  useEffect(() => {
    savedFunc.current = func;
  }, [waitFor, func]);

  return useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      timer.current = setTimeout(() => savedFunc.current?.(...args), waitFor);
    },
    [waitFor]
  ) as (...args: Parameters<F>) => ReturnType<F>;
};

export default useDebounce;
