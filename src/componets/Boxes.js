import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'
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
  justifyContent: 'space-evenly',
  padding: '5vh 0',
  margin: 'auto 0',
  height: '60vh',
  // border: '1px solid gray',
  borderRadius: '8px'
}))

const HomeBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '5vh 0',
  margin: 'auto 0',
  height: '60vh',
  // border: '1px solid gray',
  borderRadius: '8px',
  color: blue,
  textColor: 'white'
}))

export { LoginBox, LoginFormBox, HomeBox }
