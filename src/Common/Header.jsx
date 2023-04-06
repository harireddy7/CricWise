import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import Instructions from './Instructions';

const Header = () => {
  return (
    <Box bg="gray.100" p="4">
      <HStack justifyContent="space-between" maxW='768px' margin="0 auto">
        <Text className="app-title">CricWise!</Text>
        <Instructions />
      </HStack>
    </Box>
  );
};

export default Header;
