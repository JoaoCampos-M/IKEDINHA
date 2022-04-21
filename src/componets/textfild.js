import * as React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

export default function LoginTextFields(props) {
  return (
    <TextField id="standard-basic" label={props.place} variant="standard" />
  )
}

LoginTextFields.propTypes = {
  place: PropTypes.string
}
