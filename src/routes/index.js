import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import Mentoria from '../pages/mentoria'
import Cadastro from '../pages/cadastro'
import Home from '../pages/home'
import HomeT from '../pages/ikeda'
import Home1 from '../pages/home1/home1'
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/video" element={<HomeT></HomeT>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/mentoria" element={<Mentoria></Mentoria>}></Route>
        <Route path="/" element={<Home1></Home1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
