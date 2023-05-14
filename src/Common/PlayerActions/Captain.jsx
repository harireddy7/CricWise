import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from '@chakra-ui/react';
import SvgCaptainIcon from '../Svg/SvgCaptainIcon';
import { ThemeContext } from '../../theme';
import themeMapper from '../../theme/themeMapper';

const Captain = ({ isCaptain, handleRole }) => {
  const { theme } = React.useContext(ThemeContext);
  const { Captain_menulist } = themeMapper[theme];
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        fontSize="0.7rem"
        minW="20px"
        maxW="20px"
        h="20px"
        p={0}
        pt="2px"
        borderRadius="50%"
        backgroundColor="#eeef99"
      >
        <SvgCaptainIcon />
      </MenuButton>
      <MenuList fontSize="14px" {...Captain_menulist}>
        <MenuItem onClick={() => handleRole(isCaptain ? 'UNCAP' : 'CAP')}>
          <SvgCaptainIcon />
          <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Captain;
