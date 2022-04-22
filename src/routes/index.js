import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import Mentoria from '../pages/mentoria'
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/mentoria" element={<Mentoria></Mentoria>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
