import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { AppContext } from '../Store';
import { DragHandleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import PlayerMenu from './PlayerMenu';

const SortableItem = ({ player, index, handleInputBlur }) => {
  const [value, setValue] = React.useState(player.name);

  const { editPlayerName, removeFromPlaying11 } = React.useContext(AppContext);

  const handleChange = e => {
    const val = e.target.value;
    const regex = /^[a-zA-Z@]{1}[ a-zA-Z0-9#@()/_-]{0,}$/gm;

    if (!val || regex.test(val)) {
      setValue(val);
    }
  };

  // update player name in the team
  const handleNameChange = e => {
    handleInputBlur(e);

    editPlayerName((value || player).trim());
  };

  // remove player from playing11
  const handleDeletePlayer = () => {
    removeFromPlaying11(player.id);
  };

  return (
    <>
      <DragHandleIcon w="40px" />
      <Text color="gray.500" fontSize="15px" ml="10px">
        {index + 1}
      </Text>
      <Box
        w="calc(100% - 75px)"
        ml={2}
        textAlign="left"
        px={4}
        textTransform="capitalize"
      >
        <Input
          value={value}
          id={`player-input-${player.id}`}
          maxLength={20}
          maxW="200px"
          height="28px"
          mb="3px"
          fontSize='12px'
          // background={isPlayerExist ? '#f1f1f1' : 'inherit'}
          textTransform="capitalize"
          border="1px solid gray.300"
          _focusVisible={{ border: '1px solid', borderColor: 'gray.300' }}
          _focus={{ border: '1px solid', borderColor: 'gray.300' }}
          onChange={handleChange}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleNameChange(e);
            }
          }}
          onBlur={handleNameChange}
        />
      </Box>

      <PlayerMenu player={player} />

      <SmallCloseIcon w="40px" color="red.400" onClick={handleDeletePlayer} />
    </>
  );
};

export default SortableItem;
