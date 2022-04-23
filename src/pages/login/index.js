import React from 'react'
import LoginTextFields from '../../componets/textfild'
import { Drawer } from '../../componets/Drawer'
import { Entrar } from '../../componets/buttons'
function Login() {
  return (
    <Drawer>
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '100' }}>
        Login
      </h1>
      <LoginTextFields place="Nome" />
      <LoginTextFields place="Senha" />
      <Entrar>Entrar</Entrar>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Quer meter o Shape ?
      </p>
      <p style={{ color: 'white', textAlign: 'center' }}>Cadastre-se</p>
    </Drawer>
  )
}

export default Login
