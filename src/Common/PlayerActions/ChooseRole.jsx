import React from 'react';
import {
  Button,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from '@chakra-ui/react';
import SvgCaptainIcon from '../Svg/SvgCaptainIcon';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Batter = () => (
  <Image borderRadius="full" w="24px" src="bat.png" alt="bat" />
);
const Bowler = () => (
  <Image
    borderRadius="full"
    w="20px"
    marginTop="2px"
    marginLeft="4px"
    src="ball.png"
    alt="bat"
  />
);
const AllRounder = () => (
  <Image borderRadius="full" w="24px" src="all.png" alt="bat-ball" />
);
const WicketKeeper = () => (
  <Image borderRadius="full" w="24px" src="gloves.png" alt="gloves" />
);

const ROLE_MAPPER = {
  BAT: Batter,
  BALL: Bowler,
  ALL: AllRounder,
  KEEP: WicketKeeper,
};

const MENU_BUTTON_PROPS = {
  fontSize: '0.7rem',
  p: '0',
  display: 'block',
  minW: '24px',
  height: '24px',
};

const MENU_DROPDOWN_PROPS = {
  px: 1,
  py: 0,
  minW: '46px',
  rightIcon: <ChevronDownIcon />,
};

const ChooseRole = ({
  showCaptain,
  isCaptain,
  role,
  asDropdown,
  handleRole,
}) => {
  return (
    <Menu name="role-menu-container">
      <MenuButton
        name="role-menu-button"
        size="sm"
        as={asDropdown ? Button : role ? Box : Button}
        borderRadius={asDropdown ? '2px' : role ? '0' : '50%'}
        background={asDropdown ? 'gray.100' : role ? 'transparent' : 'gray.100'}
        {...(asDropdown ? MENU_DROPDOWN_PROPS : MENU_BUTTON_PROPS)}
      >
        {role ? ROLE_MAPPER[role]() : '?'}
      </MenuButton>
      <MenuList fontSize="14px" name="role-menu-options" zIndex="99999">
        <MenuItem onClick={() => handleRole('BAT')}>
          <Batter />
          <Text ml="10px">Batter</Text>
        </MenuItem>
        <MenuItem onClick={() => handleRole('BALL')}>
          <Bowler />
          <Text ml="20px">Bowler</Text>
        </MenuItem>
        <MenuItem onClick={() => handleRole('ALL')}>
          <AllRounder />
          <Text ml="10px">All-Rounder</Text>
        </MenuItem>
        <MenuItem onClick={() => handleRole('KEEP')}>
          <WicketKeeper />
          <Text ml="10px">Wicket Keeper</Text>
        </MenuItem>
        {showCaptain && (
          <>
            <Divider />
            <MenuItem onClick={() => handleRole(isCaptain ? 'UNCAP' : 'CAP')}>
              <SvgCaptainIcon />
              <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default ChooseRole;
