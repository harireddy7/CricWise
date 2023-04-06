import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.100" p="28px">
      <HStack justifyContent="space-between" maxW="768px" margin="0 auto">
        <Text className="app-title">CricWise!</Text>
        <HStack>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/harireddy7"
          >
            <Image width="24px" src="github.svg" alt="github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/harikotha13"
          >
            <Image width="24px" src="linkedin.svg" alt="linkedin" />
          </a>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
