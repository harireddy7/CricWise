import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Stack,
  StackDivider,
  Box,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import SvgCaptainIcon from './Svg/SvgCaptainIcon';
import {
  Batter,
  Bowler,
  AllRounder,
  WicketKeeper,
} from './PlayerActions/ChooseRole';

const RenderRole = () => (
  <>
    <Batter style={{ display: 'inline', marginBottom: '-4px' }} />
    <Bowler
      style={{
        display: 'inline',
        marginBottom: '-4px',
        margineLeft: '0px',
        marginRight: '4px',
      }}
    />
    <AllRounder style={{ display: 'inline', marginBottom: '-4px' }} />
    <WicketKeeper style={{ display: 'inline', marginBottom: '-4px' }} />
  </>
);

const RenderSymbol = ({ symbol }) => (
  <div style={{ display: 'inline-block', marginRight: ' 3px' }}>
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: '#edf2f7',
        fontWeight: 'bold',
        paddingLeft: '8px',
        paddingTop: '1px',
      }}
    >
      {symbol}
    </div>
  </div>
);

const Instructions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} fontWeight='normal' bg='#e1e6ef' p={2} fontSize='12px'>How to use!</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to use CricWise!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="12px" id='instruction-modal'>
            <Stack divider={<StackDivider />} spacing={2}>
              <Box>
                <Heading mb={1} fontSize="md">
                  Add Player
                </Heading>
                <UnorderedList>
                  <ListItem>
                    Provide player name and select role(optional)
                  </ListItem>
                  <ListItem>All players will be added to Squad</ListItem>
                  <ListItem>
                    First 11 players will be added to playing11
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading mb={1} fontSize="md">
                  Playing 11 | Squad
                </Heading>
                <UnorderedList>
                  <ListItem>Edit player name</ListItem>
                  <ListItem>
                    Click on <RenderRole /> icons to choose player role and
                    captain
                  </ListItem>
                  <ListItem>
                    <span>Click on </span>
                    <SvgCaptainIcon
                      style={{ display: 'inline', marginBottom: '-4px' }}
                    />
                    <span> icon and remove captain</span>
                  </ListItem>
                  <ListItem>
                    Click <RenderSymbol symbol="-" />
                    to remove player from Playing11
                  </ListItem>
                  <ListItem>
                    Hold <DragHandleIcon fontSize="10px" margin="0 2px 3px" />{' '}
                    icon to drag and drop player to sort order
                  </ListItem>
                  <ListItem>
                    Click <RenderSymbol symbol="+" /> or{' '}
                    <RenderSymbol symbol="-" />
                    to add/remove player to/from playing11
                  </ListItem>
                  <ListItem>
                    Click <RenderSymbol symbol="x" /> to delete player
                    permanantly
                  </ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Instructions;
