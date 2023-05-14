import React from 'react';
import {
  Box,
  HStack,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  Switch,
  Text,
} from '@chakra-ui/react';
import InstructionsDrawer from './InstructionsDrawer';
import { ThemeContext } from '../theme';

const Header = () => {
  const { isContrast, toggleTheme } = React.useContext(ThemeContext);
  return (
    <Box
      bg={isContrast ? 'black' : 'gray.100'}
      color={isContrast ? 'white' : 'black'}
      p="4"
    >
      <HStack justifyContent="space-between" maxW="768px" margin="0 auto">
        <Text className="app-title">CricWise!</Text>
        <HStack alignItems="center">
          <Box fontSize="12px">
            <Text display="inline" mr={1}>
              Light
            </Text>
            <Switch
              size="sm"
              isChecked={isContrast}
              onChange={e =>
                toggleTheme(e.target.checked ? 'contrast' : 'light')
              }
            />
            <Text display="inline" ml={1}>
              Contrast
            </Text>

            {/* <Menu>
              <MenuButton
                as={SunIcon}
                boxSize={5}
                cursor='pointer'
              />
              
              <MenuList minW='100px' maxW='100px'>
                {['light', 'contrast'].map(theme => <MenuItem color='black' onClick={() => toggleTheme(theme)}>{theme}</MenuItem>)}
              </MenuList>
            </Menu> */}
          </Box>
          <InstructionsDrawer />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
