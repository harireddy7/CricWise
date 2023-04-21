import React from 'react';
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import CustomTab from './CustomTab';
import Squad from '../Squad'
import Playing11 from '../Playing11'

const DEFAULT_TAB = +localStorage.getItem('__CW_TAB__')

const updateTab = index => localStorage.setItem('__CW_TAB__', index)

const PlayerTabs = () => {
  return (
    <Tabs defaultIndex={DEFAULT_TAB === 0 ? 0 : 1 } align='center' w="100%" mt="0 !important" onChange={indx => updateTab(indx)}>
      <TabList position='sticky' top='0' zIndex='500' backgroundColor='#fff'>
        <CustomTab>Playing 11 ✅</CustomTab>
        <CustomTab>Squad 🔢</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel px={0} maxW='95vw' minHeight='50vh' overflow='hidden'>
          <Playing11 />
        </TabPanel>
        <TabPanel px={0} maxW='95vw' minHeight='50vh' overflow='hidden'>
          <Squad />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PlayerTabs;
