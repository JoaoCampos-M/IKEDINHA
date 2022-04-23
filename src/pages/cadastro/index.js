import React from 'react'
import { LoginTextFields } from '../../componets/Textfields'
import { Drawer } from '../../componets/Drawer'
import { LoginBox, LoginFormBox } from '../../componets/Boxes'
import { Go } from '../../componets/Buttons'
import { Link } from 'react-router-dom'
function Cadastro() {
  return (
    <Drawer>
      <LoginBox>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem' }}>
          Login
        </h1>
        <LoginFormBox>
          <div
            style={{
              // backgroundColor: 'blue',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}
          >
            <LoginTextFields place="Email" />
            <LoginTextFields place="Senha" />
            <LoginTextFields place="Repita a senha" />
          </div>
          <Go sx={{ margin: '0.3rem auto' }}>GO!!</Go>
        </LoginFormBox>
        <p style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}>
          Já faz parte do Team Ikeda?
        </p>
        <Link
          to="/login"
          style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}
        >
          Voltar ao Login
        </Link>
      </LoginBox>
    </Drawer>
  )
}

export default Cadastro
