import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Store';
import { getTabConfig } from '../utils';
import DragDrop from './DragDrop';

const getTabPlayers = (store, tab) => {
  if (tab === 'playing11') {
    return store.playing11.team;
  }
  return store.squad;
};

const Players = ({ tab }) => {
  const store = React.useContext(AppContext);
  const tabPlayers = getTabPlayers(store, tab);

  if (tabPlayers?.length <= 0) {
    return (
      <Text as="i" fontSize="1rem" color="gray">
        {getTabConfig(tab, 'noPlayers')}
      </Text>
    );
  }

  const handleDragEnd = ({ source, destination }) => {
    // dropped outside the list
    if (!destination) {
      return;
    }
    store.sortTeam(tab, source.index, destination.index);
  };

  return (
    <VStack spacing="2" w="90vw" p="0.5rem">
      {tab === 'squad' ? (
        <Text color="gray" as="i" fontSize="12px">
          (+/-) Add/Remove from playing 11 , (?) choose player's role , (x)
          Delete from squad
        </Text>
      ) : (
        <Text color="gray" as="i" fontSize="12px">
          (?) Choose player's role , (-) Remove from playing 11
        </Text>
      )}
      <DragDrop players={tabPlayers} tab={tab} handleDragEnd={handleDragEnd} />
    </VStack>
  );
};

export default Players;
