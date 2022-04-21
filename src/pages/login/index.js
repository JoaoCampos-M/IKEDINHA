import React from 'react'
import LoginTextFields from '../../componets/textfild'
import { Drawer } from '../../componets/Drawer'
function Login() {
  return (
    <Drawer>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Login</h1>
      <LoginTextFields place="Nome" />
      <LoginTextFields place="Senha" />
    </Drawer>
  )
}

export default Login
