import React from 'react'
import { LoginTextFields } from '../../componets/textfields'
import { Drawer } from '../../componets/Drawer'
import { Entrar } from '../../componets/buttons'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const LoginBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '320px',
  padding: '5rem 1rem'
}))

const FormBox1 = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '5vh 0',
  margin: 'auto 0',
  height: '60vh',
  // border: '1px solid gray',
  borderRadius: '8px'
}))
function Login() {
  return (
    <Drawer>
      <LoginBox>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem' }}>
          Login
        </h1>
        <FormBox1>
          <div
            style={{
              // backgroundColor: 'blue',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}
          >
            <LoginTextFields place="Nome" />
            <LoginTextFields place="Senha" />
          </div>
          <Entrar sx={{ margin: '0.3rem auto' }}>Entrar</Entrar>
        </FormBox1>
        <p style={{ color: 'white', textAlign: 'center' }}>
          Quer meter o Shape ?
        </p>
        <p style={{ color: 'white', textAlign: 'center' }}>Cadastre-se</p>
      </LoginBox>
    </Drawer>
  )
}

export default Login
