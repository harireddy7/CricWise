import React from 'react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import InstructionsContent from './Instructions/InstructionsContent';

const InstructionsDrawer = () => {
  const [size, setSize] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  const handleClick = newSize => {
    setSize(newSize);
    onOpen();
  };
  return (
    <>
      <Box
        mt="-5px !important"
        cursor="pointer"
        onClick={() => handleClick(isMobile ? 'full' : 'lg')}
      >
        <InfoOutlineIcon title="instructions" ml={2} />
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>How to use CricWise!</DrawerHeader>
          <Divider mb="5px !important" opacity={1} />
          <DrawerBody>
            <InstructionsContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default InstructionsDrawer;
