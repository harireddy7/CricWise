import React from 'react';
import { Box, HStack, Switch, Text } from '@chakra-ui/react';
import InstructionsDrawer from './InstructionsDrawer';

const Header = () => {
  return (
    <Box bg="gray.100" p="4">
      <HStack justifyContent="space-between" maxW="768px" margin="0 auto">
        <Text className="app-title">CricWise!</Text>
        <HStack alignItems="center">
          <Box fontSize="12px">
            <Text display="inline" mr={1}>
              Light
            </Text>
            <Switch size="sm" />
            <Text display="inline" ml={1}>
              Contrast
            </Text>
          </Box>
          <InstructionsDrawer />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
