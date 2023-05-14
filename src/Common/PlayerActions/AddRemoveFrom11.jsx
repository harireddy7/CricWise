import React from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { ThemeContext } from '../../theme';
import themeMapper from '../../theme/themeMapper';

const AddRemoveFrom11 = ({ isInPlaying11, isPlaying11Full, handleClick }) => {
  const { theme } = React.useContext(ThemeContext);
  const { AddRemoveFrom11_icon } = themeMapper[theme] || {};
  const iconProps = {
    size: 'sm',
    minW: '24px',
    maxW: '24px',
    height: '24px',
    borderRadius: '50%',
    isDisabled: isPlaying11Full && !isInPlaying11,
    onClick: handleClick,
    ...AddRemoveFrom11_icon,
  };

  if (!isInPlaying11) {
    return <IconButton icon={<AddIcon width="10px" />} {...iconProps} />;
  }
  return <IconButton icon={<MinusIcon width="10px" />} {...iconProps} />;
};

export default AddRemoveFrom11;
