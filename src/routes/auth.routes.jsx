import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import PageNotFound from '../pages/common/PageNotFound'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AuthRoutes
