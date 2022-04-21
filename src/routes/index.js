import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
