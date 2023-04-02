import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import Players from '../Common/Players';

const Squad = () => {
  return (
    <VStack spacing={3}>
      <Text color="gray" as="i" fontSize="12px">
        (+/-) Add/Remove from playing 11 , {`(?) choose player's role ,`} (x) Delete
        from squad
      </Text>
      <Players tab="squad" />
    </VStack>
  );
};

export default Squad;
