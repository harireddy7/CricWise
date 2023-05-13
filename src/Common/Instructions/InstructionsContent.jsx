import React from 'react';
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
} from '@chakra-ui/react';
import {
  DragHandleIcon,
  MinusIcon,
  AddIcon,
  CloseIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import SvgCaptainIcon from '../Svg/SvgCaptainIcon';
import {
  Batter,
  Bowler,
  AllRounder,
  WicketKeeper,
} from '../PlayerActions/ChooseRole';

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

const InstructionsContent = () => {
  return (
    <>
      <Box>
        <Heading mb={1} fontSize="md">
          Add Player
        </Heading>
        <UnorderedList>
          <ListItem>Provide player name and select role(optional)</ListItem>
          <ListItem>All players will be added to Squad</ListItem>
          <ListItem>First 11 players will be added to playing11</ListItem>
        </UnorderedList>
      </Box>
      <Divider my="10px !important" opacity={1} />
      <Box>
        <Heading mb={1} fontSize="md">
          Playing 11 | Squad
        </Heading>
        <UnorderedList>
          <ListItem>Edit player name</ListItem>
          <ListItem>
            Click on <RenderRole /> icons to choose player role and captain
          </ListItem>
          <ListItem>
            <span>Click on </span>
            <SvgCaptainIcon
              style={{ display: 'inline', marginBottom: '-4px' }}
            />
            <span> icon and remove captain</span>
          </ListItem>
          <ListItem>
            Click <MinusIcon className="symbol-lg" /> to remove player from
            Playing11
          </ListItem>
          <ListItem>
            Hold <DragHandleIcon fontSize="10px" margin="0 2px 3px" /> icon to
            drag and drop player to sort order
          </ListItem>
          <ListItem>
            Click <AddIcon className="symbol-lg" /> or{' '}
            <MinusIcon className="symbol-lg" /> to add/remove player to/from
            playing11
          </ListItem>
          <ListItem>
            Click <CloseIcon className="symbol-lg" fontSize="14px" /> to delete
            player permanantly
          </ListItem>
          <ListItem>
            Click <DeleteIcon className="symbol-lg" /> to clear all players in
            the tab
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default InstructionsContent;
