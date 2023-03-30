import React from 'react';
import { Box, Card, CardBody, IconButton, Text } from '@chakra-ui/react';
import { AppContext } from '../Store';
import PlayerActions from './PlayerActions';
import { DragHandleIcon, SmallCloseIcon, MinusIcon } from '@chakra-ui/icons';
import TextInput from '../Components/TextInput';

const INPUT_STYLES = {
  maxW: '200px',
  height: '28px',
  mb: '3px',
  fontSize: '12px',
  textTransform: 'capitalize',
  border: '1px solid gray.300',
  _focusVisible: { border: '1px solid', borderColor: 'gray.300' },
  _focus: { border: '1px solid', borderColor: 'gray.300' },
};

const Player = ({ tab, player, serialNum, handleInputBlur }) => {
  const [value, setValue] = React.useState(player.name);

  const { editPlayerName, addRemovePlaying11, removePlayer } =
    React.useContext(AppContext);

  React.useEffect(() => {
    setValue(player.name);
  }, [player.name]);

  // update player name in the team
  const handleNameChange = e => {
    handleInputBlur(e);

    editPlayerName(player, (value || player).trim());
  };

  // remove player from squad/p11
  const handleRemove = () => {
    if (tab === 'playing11') {
      addRemovePlaying11(player, 'remove');
    } else {
      removePlayer(player.id);
    }
  };

  return (
    <Card variant="outline" w='100%'>
      <CardBody p="2px 1rem 2px 10px" display="flex" alignItems="center">
        <DragHandleIcon w="10px" />
        <Text color="gray.500" fontSize="15px" ml="10px">
          {serialNum}
        </Text>
        <Box
          w="calc(100% - 75px)"
          ml={2}
          textAlign="left"
          px={4}
          textTransform="capitalize"
        >
          <TextInput
            value={value}
            setValue={setValue}
            id={`input-${player.id}`}
            styles={INPUT_STYLES}
            onEnter={handleNameChange}
            onBlur={handleNameChange}
          />
        </Box>

        <PlayerActions tab={tab} player={player} />

        <IconButton
          icon={tab === 'playing11' ? <MinusIcon color='red' /> : <SmallCloseIcon color='red' />}
          size='sm'
          ml='10px'
          w="40px"
          color="red.400"
          onClick={handleRemove}
        />
      </CardBody>
    </Card>
  );
};

export default Player;
