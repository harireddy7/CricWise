import React from 'react';

import { Droppable } from 'react-beautiful-dnd';

const CustomDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props} data-name='custom-droppable'>{children}</Droppable>;
};

export default CustomDroppable;
