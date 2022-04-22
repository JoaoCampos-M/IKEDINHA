import React from 'react'
import LoginTextFields from '../../componets/textfild'
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
      <Go>Entrar</Go>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Quer meter o Shape ?
      </p>
      <p style={{ color: 'white', textAlign: 'center' }}>Cadastre-se</p>
    </Drawer>
  )
}

export default Cadastro
