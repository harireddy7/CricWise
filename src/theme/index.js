import React from 'react';

const themeKey = '__CW_THEME__';
const defaultAppTheme = localStorage.getItem(themeKey) || 'light';

const initState = defaultAppTheme;

export const ThemeContext = React.createContext(initState);

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(initState);

  const toggleTheme = newTheme => {
    setTheme(newTheme);
    localStorage.setItem(themeKey, newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isContrast: theme === 'contrast', theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
