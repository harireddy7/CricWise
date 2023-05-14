import React from 'react';
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import CustomTab from './CustomTab';
import Squad from '../Squad';
import Playing11 from '../Playing11';
import { ThemeContext } from '../../theme';
import themeMapper from '../../theme/themeMapper';

const DEFAULT_TAB = +localStorage.getItem('__CW_TAB__');

const PlayerTabs = () => {
  const [activeTab, setActiveTab] = React.useState(DEFAULT_TAB);
  const { theme } = React.useContext(ThemeContext);
  const { PlayerTabs_activeTab } = themeMapper[theme] || {};

  const updateTab = index => {
    setActiveTab(index);
    localStorage.setItem('__CW_TAB__', index);
  };

  return (
    <Tabs
      defaultIndex={activeTab === 0 ? 0 : 1}
      align="center"
      w="100%"
      mt="0 !important"
      onChange={indx => updateTab(indx)}
    >
      <TabList position="sticky" top="0" zIndex="500" backgroundColor="#fff">
        {['Playing 11 ✅', 'Squad 🔢'].map((tab, index) => (
          <CustomTab
            key={tab}
            {...(activeTab === index && PlayerTabs_activeTab)}
          >
            {tab}
          </CustomTab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel px={0} maxW="95vw" minHeight="50vh" overflow="hidden">
          <Playing11 />
        </TabPanel>
        <TabPanel px={0} maxW="95vw" minHeight="50vh" overflow="hidden">
          <Squad />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PlayerTabs;
