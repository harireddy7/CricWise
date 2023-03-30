import React from 'react';
import { Card, CardBody, Stack, Text } from '@chakra-ui/react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { AppContext } from '../Store';
import SortableItem from './SortableItem';
import CustomDroppable from './DnD/CustomDroppable';

const SortableList = () => {
  const {
    playing11,
    sortTeam,
  } = React.useContext(AppContext);

  // no players in the team
  if (!playing11.team?.length) {
    return (
      <Text as="i" fontSize="1rem" color="gray">
        Build your team!
      </Text>
    );
  }

  // after drag complete
  const handleDragEnd = ({ source, destination }) => {
    // dropped outside the list
    if (!destination) {
      return;
    }
    sortTeam(playing11.team, source.index, destination.index)
  };

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
    <Stack spacing="4" w="90vw" p="0.5rem">
      <DragDropContext onDragEnd={handleDragEnd}>
        <CustomDroppable droppableId="droppable">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              onClick={handleInputBlur}
            >
              <Stack spacing="2">
                {playing11.team.map((player, index) => (
                  <Draggable
                    key={player.id}
                    draggableId={player.id}
                    index={index}
                  >
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <Card variant="outline">
                          <CardBody
                            p="2px 1rem 2px 10px"
                            display="flex"
                            alignItems="center"
                          >
                            <SortableItem
                              player={player}
                              index={index}
                              handleInputBlur={handleInputBlur}
                            />
                          </CardBody>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Stack>
            </div>
          )}
        </CustomDroppable>
      </DragDropContext>
    </Stack>
  );
};

export default SortableList;
