import React from 'react'
import { LoginTextFields } from '../../componets/Textfields'
import { Drawer } from '../../componets/Drawer'
import { Go } from '../../componets/buttons'
function Cadastro() {
  return (
    <Drawer>
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '100' }}>
        Cadastro
      </h1>
      <LoginTextFields place="Email" />
      <LoginTextFields place="Senha" />
      <LoginTextFields place="Confirme sua senha" />
      <Go>Go</Go>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Ja faz parte do Team Ikeda?
      </p>
      <p style={{ color: 'white', textAlign: 'center' }}>Login</p>
    </Drawer>
  )
}

export default Cadastro
