import React from 'react'
import LoginTextFields from '../../componets/textfild'
function Login() {
  return (
    <div>
      <h1>Login</h1>
        <LoginTextFields place="Nome" />
        <LoginTextFields place="Senha" />
    </div>
  )
}

export default Login
