import React from 'react';
import { Text, useMediaQuery, VStack } from '@chakra-ui/react';
import Players from '../Common/Players';

const Squad = () => {
  const [isScreenGT380px] = useMediaQuery('(min-width: 380px)')
  return (
    <VStack spacing={3}>
      <Text color="gray" as="i" fontSize="12px">
        (+/-) Add/Remove from playing 11 , {isScreenGT380px && `(?) choose player's role ,`} (x) Delete
        from squad
      </Text>
      <Players tab="squad" />
    </VStack>
  );
};

export default Squad;
