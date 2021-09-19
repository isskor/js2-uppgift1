import { RefObject, useEffect } from 'react';

function useOnOutSideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
}

export default useOnOutSideClick;
