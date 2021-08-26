import * as React from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import useWindowsSize from '../../hooks/useWindowsSize';
import './Resizable.css';

interface IResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<IResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  const { width, height } = useWindowsSize();
  const [internalWidth, setInternalWidth] = React.useState(
    window.innerWidth * 0.75,
  );

  React.useEffect(() => {
    if (window.innerWidth * 0.75 < internalWidth) {
      setInternalWidth(window.innerWidth * 0.75);
    }
  }, [width, internalWidth]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resizeHorizontal',
      minConstraints: [width * 0.2, Infinity],
      maxConstraints: [width * 0.75, Infinity],
      height: Infinity,
      width: internalWidth,
      resizeHandles: ['e'],
      onResizeStop: (_, data) => {
        setInternalWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 48],
      maxConstraints: [Infinity, height * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
