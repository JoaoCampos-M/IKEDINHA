import * as React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
// import { useTheme } from '@emotion/react'

const StyledTextField = styled(TextField)(() => ({
  display: 'block',
  margin: '5rem auto',
  width: 'max-content',
  '& input': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: 'green'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red'
    },
    '&:hover fieldset': {
      borderColor: 'yellow'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green'
    }
  }
}))

export default function LoginTextFields({ place, ...rest }) {
  return (
    <StyledTextField
      variant="filled"
      focused
      color="primary"
      label={place}
      {...rest}
      style={{ '& input': { color: 'white' } }}
    />
  )
}

LoginTextFields.propTypes = {
  place: PropTypes.string
}
