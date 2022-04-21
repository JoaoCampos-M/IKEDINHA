import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Rotas from './routes'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rotas />
    </ThemeProvider>
  )
}

export default App
