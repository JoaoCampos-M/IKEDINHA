import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Rotas from './routes'
import { createTheme } from '@mui/material/styles'

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
