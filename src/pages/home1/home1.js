import React from 'react'
import { LoginTextFields } from '../../componets/Textfields'
import { Drawer } from '../../componets/Drawer'
import { Entrar } from '../../componets/Buttons'
import { LoginFormBox, LoginBox } from '../../componets/Boxes'
import { Link } from 'react-router-dom'
import { k } from '../../img/k.png'

function Home1() {
  return (
    <Drawer>
      <LoginBox>
        <img src={k} alt="k" />
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}>
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
            <LoginTextFields place="Nome" />
            <LoginTextFields place="Senha" />
          </div>
          <Entrar sx={{ margin: '0.3rem auto' }}>Entrar</Entrar>
        </LoginFormBox>
        <p style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}>
          Quer meter o Shape ?
        </p>
        <Link
          to="/cadastro"
          style={{ color: 'white', textAlign: 'center', margin: '0.5rem' }}
        >
          Cadastre-se
        </Link>
      </LoginBox>
    </Drawer>
  )
}

export default Home1
