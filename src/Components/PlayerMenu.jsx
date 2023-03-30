import React from 'react';
import {
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
  Button,
} from '@chakra-ui/react';
import { AppContext } from '../Store';

const Batter = () => (
  <Image borderRadius="full" w="35px" src="bat.png" alt="bat" />
);
const Bowler = () => (
  <Image borderRadius="full" w="25px" src="ball.png" alt="bat" />
);
const AllRounder = () => (
  <Image borderRadius="full" w="35px" src="all.png" alt="bat-ball" />
);
const WicketKeeper = () => (
  <Image borderRadius="full" w="35px" src="gloves.png" alt="gloves" />
);
const Captain = ({ mr }) => (
  <Text
    minW="30px"
    fontSize="14px"
    p="5px"
    textAlign="center"
    backgroundColor="#eeef99"
    borderRadius="50%"
    mr={mr}
  >
    C
  </Text>
);

const ROLE_MAPPER = {
  BAT: Batter,
  BALL: Bowler,
  ALL: AllRounder,
  KEEP: WicketKeeper,
  CAP: Captain,
};

const PlayerMenu = ({ player }) => {
  const {
    playing11: { captain },
    updatePlaying11Role,
  } = React.useContext(AppContext);

  const isCaptain = captain === player.id;

  return (
    <Menu>
      {isCaptain && (
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            mr="8px"
            pl="4px"
            pr="4px"
            borderRadius="50%"
            backgroundColor="#eeef99"
          >
            C
          </MenuButton>
          <MenuList fontSize="14px">
            <MenuItem
              onClick={() =>
                updatePlaying11Role(player, isCaptain ? 'UNCAP' : 'CAP')
              }
            >
              <Captain />
              <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      <MenuButton as={Button} size="sm" pl="4px" pr="4px" w="35px">
        {player.role ? ROLE_MAPPER[player.role]() : '?'}
      </MenuButton>
      <MenuList fontSize="14px">
        <MenuItem onClick={() => updatePlaying11Role(player, 'BAT')}>
          <Batter />
          <Text ml="10px">Batter</Text>
        </MenuItem>
        <MenuItem onClick={() => updatePlaying11Role(player, 'BALL')}>
          <Bowler />
          <Text ml="20px">Bowler</Text>
        </MenuItem>
        <MenuItem onClick={() => updatePlaying11Role(player, 'ALL')}>
          <AllRounder />
          <Text ml="10px">All-Rounder</Text>
        </MenuItem>
        <MenuItem onClick={() => updatePlaying11Role(player, 'KEEP')}>
          <WicketKeeper />
          <Text ml="10px">Wicket Keeper</Text>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() =>
            updatePlaying11Role(player, isCaptain ? 'UNCAP' : 'CAP')
          }
        >
          <Captain />
          <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlayerMenu;
