import * as React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
// import { useTheme } from '@emotion/react'

const StyledTextField = styled(TextField)(() => ({
  display: 'block',
  margin: '2rem auto',
  width: '100%',
  '& input': {
    width: '100%',
    color: 'white'
  },
  '& .MuiInputBase-root-MuiFilledInput-root': {
    color: 'red'
  },
  '& label': {
    color: 'rgba(255,255,255,0.7)'
  },
  '& div': {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    '&::before': {
      borderBottom: '2px solid white'
    }
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

function LoginTextFields({ place, ...rest }) {
  return <StyledTextField variant="filled" label={place} {...rest} />
}

function CommentTextField({ place, ...rest }) {
  return <StyledTextField label={place} {...rest} />
}

LoginTextFields.propTypes = {
  place: PropTypes.string
}
CommentTextField.propTypes = {
  place: PropTypes.string
}

export { LoginTextFields, CommentTextField }
