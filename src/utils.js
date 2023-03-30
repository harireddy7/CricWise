const TAB_CONFIG = {
  noPlayers: {
    playing11: 'Add players from squad!',
    squad: `Let's build from scratch!`,
  },
};

export const getTabConfig = (tab, key) => {
  return TAB_CONFIG[key]?.[tab];
};

// name, id, squad
export const addPlayerToSquad = (squad, player) => {
  return [...squad, { ...player }];
};

export const addPlayerTo11 = (playing11, player) => {
  return {
    ...playing11,
    team: [...playing11.team, { ...player }],
  };
};

export const removePlayerFrom11 = (playing11, id) => {
  const updatedTeam = playing11.team.filter(p => p.id !== id);
  return {
    team: updatedTeam,
    captain: playing11.captain === id ? null : playing11.captain,
    // sub: presentSub === id ? null : presentSub,
  };
};

export const removePlayerFromSquad = (squad, id) => {
  return squad.filter(p => p.id !== id);
};
