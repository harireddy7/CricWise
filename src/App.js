import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Divider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import AddPlayerForm from './Components/AddPlayerForm';
import StoreProvider from './Store';
import PlayerTabs from './Pages/PlayerTabs/PlayerTabs';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p='0.5rem'>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8} height='100%' w='95vw' p={0}>
            <StoreProvider>
              <AddPlayerForm />
              <Divider mt='1rem !important' />
              <PlayerTabs />
            </StoreProvider>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
