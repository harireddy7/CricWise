import React from 'react';
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import CustomTab from './CustomTab';
import Squad from '../Squad'
import Playing11 from '../Playing11'

const PlayerTabs = () => {
  return (
    <Tabs defaultIndex={1} align='center' w="95vw" mt="0 !important">
      <TabList position='sticky' top='0' zIndex='500' backgroundColor='#fff'>
        <CustomTab>Playing 11 ✅</CustomTab>
        <CustomTab>Squad 🔢</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Playing11 />
        </TabPanel>
        <TabPanel>
          <Squad />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PlayerTabs;
