import React from 'react'
import { styled } from '@material-ui/styles'
import PropTypes from 'prop-types'

const StyledContainer = styled('div')(() => ({
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}))
export function Drawer({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

Drawer.propTypes = {
  children: PropTypes.node
}
