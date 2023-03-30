import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { AppContext } from '../Store';
import TextInput from './TextInput';

const AddPlayerForm = () => {
  const [value, setValue] = React.useState('');

  const { addPlayer } = React.useContext(AppContext);

  const handleAdd = () => {
    if (value) {
      addPlayer(value.trim());
      setValue('');
    }
  };

  return (
    <HStack mt={3} mb={0}>
      <TextInput
        value={value}
        setValue={setValue}
        onEnter={handleAdd}
        id="add-player-input"
      />
      <Button colorScheme="facebook" onClick={handleAdd}>
        Add
      </Button>
    </HStack>
  );
};

export default AddPlayerForm;
