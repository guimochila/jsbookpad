import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

function useWindowsSize(): Size {
  const [windowsSize, setWindowsSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    let timer: NodeJS.Timeout;

    function handleSize() {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setWindowsSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
    }

    window.addEventListener('resize', handleSize);

    handleSize();

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowsSize;
}

export default useWindowsSize;
