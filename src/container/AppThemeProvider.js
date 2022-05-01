import React from 'react'
import { ColorModeContext } from '../context/ThemeContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AppThemeProvider = (props) => {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  const theme = createTheme({
    palette: {
      mode
    }
  })

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AppThemeProvider
