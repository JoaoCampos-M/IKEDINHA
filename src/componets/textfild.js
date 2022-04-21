import * as React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

export default function LoginTextFields({ place, ...rest }) {
  return <TextField label={place} {...rest} />
}

LoginTextFields.propTypes = {
  place: PropTypes.string
}
