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
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
}))

export default function LoginTextFields({ place, ...rest }) {
  return <StyledTextField variant="filled" label={place} {...rest} />
}

LoginTextFields.propTypes = {
  place: PropTypes.string
}
