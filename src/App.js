import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Divider,
} from '@chakra-ui/react';
import AddPlayerForm from './Components/AddPlayerForm';
import StoreProvider from './Store';
import PlayerTabs from './Pages/PlayerTabs/PlayerTabs';
import Header from './Common/Header';
import Footer from './Common/Footer';
import AppThemeProvider from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppThemeProvider>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" display="flex" flexDirection="column">
            <Header />
            <VStack spacing={8} height="100%" p="0.5rem" flex="1">
              <StoreProvider>
                <AddPlayerForm />
                <Divider mt="1rem !important" />
                <PlayerTabs />
              </StoreProvider>
            </VStack>
            <Footer />
          </Grid>
        </Box>
      </AppThemeProvider>
    </ChakraProvider>
  );
};

export default App;
