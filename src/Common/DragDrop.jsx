import React from 'react';
import { Box, useMediaQuery, VStack } from '@chakra-ui/react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import CustomDroppable from '../Components/DnD/CustomDroppable';
import Player from './Player';

const DragDrop = ({ players, tab, handleDragEnd }) => {
  const [screenLT350px] = useMediaQuery('(max-width: 349px)');

  // handle clicking anywhere inside draggable node
  const handleInputBlur = e => {
    const activeTag = document.activeElement?.tagName;
    const activeId = document.activeElement?.id;
    const clickedId = e.target?.id;
    if (
      (activeTag === 'INPUT' && activeId !== clickedId) ||
      (activeTag === 'INPUT' && activeId === clickedId && e.key === 'Enter')
    ) {
      document.activeElement.blur();
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <CustomDroppable droppableId="droppable" name="custom-droppable">
        {provided => (
          <VStack
            spacing={5}
            {...provided.droppableProps}
            ref={provided.innerRef}
            onClick={handleInputBlur}
          >
            {players.map((player, index) => (
              <Draggable key={player.id} draggableId={player.id} index={index}>
                {provided => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    w='90vw'
                    maxW="500px"
                  >
                    <Player
                      tab={tab}
                      player={player}
                      serialNum={index + 1}
                      handleInputBlur={handleInputBlur}
                      screenLT350px={screenLT350px}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </VStack>
        )}
      </CustomDroppable>
    </DragDropContext>
  );
};

export default DragDrop;
