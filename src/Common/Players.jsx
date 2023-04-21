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
  const { handleClearAll } = store;

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
    <VStack w="100%">
      <DragDrop
        players={tabPlayers}
        tab={tab}
        handleDragEnd={handleDragEnd}
        handleClearAll={() => handleClearAll(tab)}
      />
    </VStack>
  );
};

export default Players;
