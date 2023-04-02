import React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const DeletePlayer = ({ handleClick }) => {
  const iconProps = {
    size: 'sm',
    minW: '24px',
    maxW: '24px',
    height: '24px',
    borderRadius: '50%',
    onClick: handleClick
  };

  return <IconButton icon={<CloseIcon width="8px" />} {...iconProps} />;
};

export default DeletePlayer;
