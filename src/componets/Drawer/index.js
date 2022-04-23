import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const StyledContainer = styled('div')(() => ({
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}))
const MobileBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '600px',
    width: '100%',
    margin: '0px auto',
    height: '100vh'
  },
  backgroundColor: 'black',
  height: '100vh'
}))
export function Drawer({ children }) {
  return (
    <StyledContainer>
      <MobileBox>{children}</MobileBox>
    </StyledContainer>
  )
}

Drawer.propTypes = {
  children: PropTypes.node
}
