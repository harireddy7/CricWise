import React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { ThemeContext } from '../../theme';
import themeMapper from '../../theme/themeMapper';

const DeletePlayer = ({ handleClick }) => {
  const { theme } = React.useContext(ThemeContext);
  const { DeletePlayer_icon } = themeMapper[theme] || {};
  const iconProps = {
    size: 'sm',
    minW: '24px',
    maxW: '24px',
    height: '24px',
    borderRadius: '50%',
    onClick: handleClick,
    ...DeletePlayer_icon,
  };

  return <IconButton icon={<CloseIcon width="8px" />} {...iconProps} />;
};

export default DeletePlayer;
