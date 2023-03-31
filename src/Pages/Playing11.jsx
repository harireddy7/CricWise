import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import Players from '../Common/Players';

const Playing11 = () => {
  return (
    <VStack spacing={3}>
      <Text color="gray" as="i" fontSize="12px">
        (?) Choose player's role , (-) Remove from playing 11
      </Text>
      <Players tab="playing11" />
    </VStack>
  );
};

export default Playing11;
