import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import Mentoria from '../pages/mentoria'
import Cadastro from '../pages/cadastro'
import Home from '../pages/home'
import HomeT from '../pages/ikeda'
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeT></HomeT>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/mentoria" element={<Mentoria></Mentoria>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
