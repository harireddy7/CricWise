import React from 'react';
import { addPlayerTo11, addPlayerToSquad, removePlayerFrom11, removePlayerFromSquad } from './utils';

const initState = {
  squad: [],
  playing11: {
    captain: null,
    sub: null,
    team: [],
  },
};

export const AppContext = React.createContext({ ...initState });

const StoreProvider = ({ children }) => {
  const [store, setStore] = React.useReducer(
    (state, nextState) => ({ ...state, ...nextState }),
    { ...initState }
  );

  const {
    squad = [],
    playing11,
    playing11: { team: playingTeam } = {},
  } = store;

  /** ADD PLAYER TO SQUAD/PLAYING 11 */
  const addPlayer = name => {
    const newPlayer = {
      id: `player-${Date.now()}`,
      name,
      role: null,
    };
    const isPlaying11Full = playingTeam?.length >= 11;
    const updatedSquad = addPlayerToSquad(squad, newPlayer);
    const updatedPlaying11 = addPlayerTo11(playing11, newPlayer);

    setStore({
      squad: updatedSquad,
      ...(!isPlaying11Full && { playing11: updatedPlaying11 }),
    });
  };

  /** ADD/REMOVE PLAYER FROM PLAYING 11 */
  const addRemovePlaying11 = (player, action) => {
    if (action === 'add') {
      const updatedPlaying11 = addPlayerTo11(playing11, player);
      setStore({
        playing11: updatedPlaying11,
      });
    } else if (action === 'remove') {
      const updatedPlaying11 = removePlayerFrom11(playing11, player.id);
      if (updatedPlaying11) {
        setStore({
          playing11: updatedPlaying11,
        });
      }
    }
  }

  /** EDIT PLAYER NAME */
  const editPlayerName = (player, newName) => {
    const presentSquad = squad;
    const playerIndex = squad?.findIndex(p => p.id === player.id);
    if (playerIndex >= 0) {
      presentSquad[playerIndex].name = newName;
    }

    const present11 = playingTeam;
    const playerIndexin11 = playingTeam.findIndex(p => p.id === player.id);
    if (playerIndexin11 >= 0) {
      present11[playerIndexin11].name = newName;
    }

    setStore({
      squad: presentSquad,
      ...(playerIndexin11 >= 0 && {
        playing11: { ...playing11, team: present11 },
      }),
    });
  };

  /** UPDATE PLAYER ROLE IN PLAYING 11 */
  const updatePlaying11Role = (player, role) => {
    const playerIndex = playingTeam.findIndex(p => p.id === player.id);
    if (playerIndex >= 0 && playingTeam[playerIndex]) {
      if (role === 'CAP' || role === 'UNCAP') {
        setStore({
          playing11: {
            ...store.playing11,
            captain: role === 'CAP' ? player.id : null,
          },
        });
      } else {
        const presentTeam = playingTeam;
        presentTeam[playerIndex].role = role;
        setStore({
          playing11: {
            ...playing11,
            team: presentTeam,
          },
        });
      }
    }
  };

  /** UPDATE PLAYER ROLE IN SQUAD */
  const updateSquadPlayerRole = (player, role) => {
    const playerIndex = squad.findIndex(p => p.id === player.id);
    if (playerIndex >= 0 && squad[playerIndex]) {
      const presentTeam = squad;
      presentTeam[playerIndex].role = role;
      setStore({
        squad: presentTeam,
      });
    }
  };


  /** UPDATE PLAYER ROLE IN SQUAD */
  const removePlayer = id => {
    const updatedSquad = removePlayerFromSquad(squad, id);
    const updatedPlaying11 = removePlayerFrom11(playing11, id);

    setStore({
      squad: updatedSquad,
      playing11: updatedPlaying11
    })
  };



  /** SORT PLAYING11 PLAYERS */
  const sortTeam = (tab, startIndex, endIndex) => {
    const list = tab === 'playing11' ? store.playing11.team : store.squad;
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    if (tab === 'playing11') {
      setStore({
        playing11: {
          ...store.playing11,
          team: result,
        },
      });
    } else {
      setStore({
        squad: result
      })
    }
  };

  return (
    <AppContext.Provider
      value={{
        squad,
        playing11,
        addPlayer,
        addRemovePlaying11,
        removePlayer,
        editPlayerName,
        updatePlaying11Role,
        updateSquadPlayerRole,
        sortTeam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StoreProvider;
