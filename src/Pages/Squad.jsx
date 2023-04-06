import React from 'react';
import { VStack } from '@chakra-ui/react';
import Players from '../Common/Players';

const Squad = () => {
  return (
    <VStack spacing={3}>
      <Players tab="squad" />
    </VStack>
  );
};

export default Squad;
