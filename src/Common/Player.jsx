import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '../Store';
import PlayerActions from './PlayerActions';
import { DragHandleIcon } from '@chakra-ui/icons';
import TextInput from '../Components/TextInput';
import ChooseRole from './PlayerActions/ChooseRole';
import Captain from './PlayerActions/Captain';
import { ThemeContext } from '../theme';
import themeMapper from '../theme/themeMapper';

const INPUT_STYLES = {
  maxW: '170px',
  minW: '80px',
  height: '28px',
  mb: '3px',
  fontSize: '15px',
  textTransform: 'capitalize',
  border: '1px solid transparent',
  _focusVisible: { border: '1px solid', borderColor: 'gray.300' },
  _focus: { border: '1px solid', borderColor: 'gray.300' },
};

const Player = ({ tab, player, serialNum, handleInputBlur, screenLT350px }) => {
  const [value, setValue] = React.useState(player.name);
  const { theme } = React.useContext(ThemeContext);
  const { Player_card } = themeMapper[theme];

  const {
    playing11,
    editPlayerName,
    addRemovePlaying11,
    updatePlaying11Role,
    updateSquadPlayerRole,
    removePlayer,
  } = React.useContext(AppContext);

  const isInPlaying11 = playing11?.team.find(p => p.id === player.id);
  const isPlaying11Full = playing11?.team?.length >= 11;

  React.useEffect(() => {
    setValue(player.name);
  }, [player.name]);

  // update player name in the team
  const handleNameChange = e => {
    handleInputBlur(e);

    editPlayerName(player, value.trim());
  };

  // remove player from squad/p11
  const handleRemove = () => {
    if (tab === 'playing11') {
      addRemovePlaying11(player, 'remove');
    } else {
      removePlayer(player.id);
    }
  };

  const handleRole = role => {
    if (tab === 'playing11') {
      updatePlaying11Role(player, role);
    } else {
      updateSquadPlayerRole(player, role);
    }
  };

  return (
    <Card
      variant="outline"
      w="100%"
      background={tab === 'squad' && isInPlaying11 ? '#f5f5f0' : 'inherit'}
      {...Player_card}
    >
      <CardBody p="2px 5px 2px 0" display="flex" alignItems="center">
        <HStack justify="space-between" w="100%">
          <HStack>
            {!screenLT350px && (
              <DragHandleIcon fontSize="14px" margin="0 8px" />
            )}
            <Text color="gray.500" fontSize="15px" ml="10px">
              {serialNum}
            </Text>
            <TextInput
              value={value}
              key={player.id}
              setValue={setValue}
              id={`input-${player.id}`}
              styles={{
                ...INPUT_STYLES,
                width: value.length > 5 ? `${value.length * 13}px` : '80px',
                margin: '5px 6px',
                minW: screenLT350px ? INPUT_STYLES.minW : '120px',
              }}
              onEnter={handleNameChange}
              onBlur={handleNameChange}
            />
          </HStack>

          <HStack maxW={screenLT350px ? '55px' : '100%'} align="center">
            {screenLT350px ? (
              <>
                {tab === 'playing11' && playing11.captain === player.id && (
                  <Captain
                    isCaptain={playing11.captain === player.id}
                    handleRole={handleRole}
                  />
                )}
                <ChooseRole
                  role={player.role}
                  isCaptain={playing11.captain === player.id}
                  showCaptain={tab === 'playing11'}
                  handleRole={handleRole}
                  tab={tab}
                />
              </>
            ) : (
              <PlayerActions
                tab={tab}
                player={player}
                isInPlaying11={isInPlaying11}
                isPlaying11Full={isPlaying11Full}
                screenLT350px={screenLT350px}
                handleRole={handleRole}
                handleRemove={handleRemove}
              />
            )}
          </HStack>
        </HStack>
      </CardBody>
      {screenLT350px && (
        <>
          <Divider />
          <CardFooter p={2}>
            <PlayerActions
              tab={tab}
              player={player}
              isInPlaying11={isInPlaying11}
              isPlaying11Full={isPlaying11Full}
              screenLT350px={screenLT350px}
              handleRole={handleRole}
              handleRemove={handleRemove}
            />
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default Player;
