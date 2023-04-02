import React from 'react';
import { Button, HStack, useMediaQuery, VStack } from '@chakra-ui/react';
import { AppContext } from '../Store';
import TextInput from './TextInput';
import ChooseRole from '../Common/PlayerActions/ChooseRole';

const initState = { name: '', role: 'BAT' };

const AddPlayerForm = () => {
  const [player, setPlayer] = React.useReducer(
    (state, next) => ({ ...state, ...next }),
    initState
  );

  const { addPlayer } = React.useContext(AppContext);

  const [screenGT420px] = useMediaQuery('(min-width: 420px)');

  const handleAdd = () => {
    if (player.name) {
      addPlayer(player?.name.trim(), player?.role);
      setPlayer(initState);
    }
  };

  return (
    <VStack>
      <HStack mt={3} mb={0}>
        <TextInput
          value={player.name}
          setValue={val => setPlayer({ name: val })}
          onEnter={handleAdd}
          id="add-player-input"
        />
        <ChooseRole
          asDropdown
          role={player.role}
          handleRole={role => setPlayer({ role })}
        />
        {screenGT420px && (
          <Button
            size="sm"
            colorScheme="facebook"
            borderRadius="4px"
            onClick={handleAdd}
          >
            Add
          </Button>
        )}
      </HStack>
      {!screenGT420px && (
        <Button
          size="sm"
          colorScheme="facebook"
          onClick={handleAdd}
          w="100%"
          borderRadius="4px"
        >
          Add
        </Button>
      )}
    </VStack>
  );
};

export default AddPlayerForm;
