import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const LoginBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '320px',
  padding: '5rem 1rem'
}))

const LoginFormBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '5vh 0',
  margin: 'auto 0',
  height: '60vh',
  // border: '1px solid gray',
  borderRadius: '8px'
}))

export { LoginBox, LoginFormBox }
