import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import Rotas from './routes'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rotas />
    </ThemeProvider>
  )
}

export default App
