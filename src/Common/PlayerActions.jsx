import React from 'react';
import { HStack } from '@chakra-ui/react';
import { AppContext } from '../Store';
import { DragHandleIcon } from '@chakra-ui/icons';
import ChooseRole from './PlayerActions/ChooseRole';
import AddRemoveFrom11 from './PlayerActions/AddRemoveFrom11';
import DeletePlayer from './PlayerActions/DeletePlayer';
import Captain from './PlayerActions/Captain';

const PlayerActions = ({
  screenLT350px,
  tab,
  player,
  isInPlaying11,
  isPlaying11Full,
  handleRole,
  handleRemove,
}) => {
  const {
    playing11: { captain },
    addRemovePlaying11,
  } = React.useContext(AppContext);

  if (screenLT350px) {
    return (
      <HStack
        justify="flex-end"
        w="100%"
        justifyContent="space-between"
        align="center"
      >
        <DragHandleIcon fontSize="14px" />
        <HStack spacing={3}>
          <AddRemoveFrom11
            isInPlaying11={isInPlaying11}
            isPlaying11Full={isPlaying11Full}
            handleClick={() =>
              addRemovePlaying11(player, isInPlaying11 ? 'remove' : 'add')
            }
          />
          {tab === 'squad' && <DeletePlayer handleClick={handleRemove} />}
        </HStack>
      </HStack>
    );
  }

  if (tab === 'playing11') {
    return (
      <HStack
        justify="flex-end"
        w="100%"
        justifyContent="space-between"
        align="center"
      >
        {captain === player.id && <Captain isCaptain={captain === player.id} handleRole={handleRole} />}
        <ChooseRole
          role={player.role}
          isCaptain={captain === player.id}
          showCaptain
          handleRole={handleRole}
        />
        <AddRemoveFrom11
          isInPlaying11={isInPlaying11}
          isPlaying11Full={isPlaying11Full}
          handleClick={() =>
            addRemovePlaying11(player, isInPlaying11 ? 'remove' : 'add')
          }
        />
      </HStack>
    );
  }

  return (
    <HStack
      justify="flex-end"
      w="100%"
      justifyContent="space-between"
      align="center"
    >
      <ChooseRole
        role={player.role}
        isCaptain={captain === player.id}
        handleRole={handleRole}
      />
      <AddRemoveFrom11
        isInPlaying11={isInPlaying11}
        isPlaying11Full={isPlaying11Full}
        handleClick={() =>
          addRemovePlaying11(player, isInPlaying11 ? 'remove' : 'add')
        }
      />
      {tab === 'squad' && <DeletePlayer handleClick={handleRemove} />}
    </HStack>
  );
};

export default PlayerActions;
