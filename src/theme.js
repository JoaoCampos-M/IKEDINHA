import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export let theme = createTheme({
  overrides: {
    MuiInput: {
      input: {
        '&::placeholder': {
          color: 'white'
        },
        color: 'white' // if you also want to change the color of the input, this is the prop you'd use
      }
    }
  },
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  }
})
theme = responsiveFontSizes(theme)
