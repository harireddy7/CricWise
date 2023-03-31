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
  useMediaQuery,
} from '@chakra-ui/react';
import { AppContext } from '../Store';

const Batter = () => (
  <Image borderRadius="full" w="35px" src="bat.png" alt="bat" />
);
const Bowler = () => (
  <Image borderRadius="full" w="20px" src="ball.png" alt="bat" />
);
const AllRounder = () => (
  <Image borderRadius="full" w="35px" src="all.png" alt="bat-ball" />
);
const WicketKeeper = () => (
  <Image borderRadius="full" w="35px" src="gloves.png" alt="gloves" />
);
const Captain = ({ mr }) => (
  <Text
    fontSize="0.7rem"
    minW="24px"
    h="24px"
    p="3px"
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

const checkPlayerById = (team = [], id) => {
  return team.find(p => p.id === id);
};

const PlayerActions = ({ tab, player }) => {
  const {
    playing11,
    playing11: { captain },
    updatePlaying11Role,
    updateSquadPlayerRole,
    addRemovePlaying11,
  } = React.useContext(AppContext);

  const [isScreenGT380px] = useMediaQuery('(min-width: 380px)')

  const isCaptain = captain === player.id;

  const isInPlaying11 = checkPlayerById(playing11.team, player.id);

  const handleRole = role => {
    if (tab === 'playing11') {
      updatePlaying11Role(player, role);
    } else {
      updateSquadPlayerRole(player, role);
    }
  };

  return (
    <Menu>
      {tab === 'playing11' && isCaptain && (
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            mr="8px"
            fontSize="0.7rem"
            minW="24px"
            h="24px"
            p="0 !important"
            borderRadius="50%"
            backgroundColor="#eeef99"
          >
            C
          </MenuButton>
          <MenuList fontSize="14px">
            <MenuItem onClick={() => handleRole(isCaptain ? 'UNCAP' : 'CAP')}>
              <Captain />
              <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      {tab === 'squad' && (
        <Button
          size="sm"
          minWidth="24px"
          height='24px'
          p='2px 0 0'
          borderRadius='50%'
          mr="2px"
          isDisabled={(playing11?.team?.length >= 11 && !isInPlaying11)}
          onClick={() =>
            addRemovePlaying11(player, isInPlaying11 ? 'remove' : 'add')
          }
        >
          {isInPlaying11 ? '-' : '+'}
        </Button>
      )}
      {(tab === 'playing11' || (isScreenGT380px && tab === 'squad')) && (
        <>
          <MenuButton as={Button} size="sm" pl="4px" pr="4px" w="35px">
            {player.role ? ROLE_MAPPER[player.role]() : '?'}
          </MenuButton>
          <MenuList fontSize="14px">
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
            {tab === 'playing11' && (
              <>
                <Divider />
                <MenuItem
                  onClick={() => handleRole(isCaptain ? 'UNCAP' : 'CAP')}
                >
                  <Captain />
                  <Text ml="10px">{isCaptain ? 'Remove' : 'Make'} Captain</Text>
                </MenuItem>
              </>
            )}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default PlayerActions;
