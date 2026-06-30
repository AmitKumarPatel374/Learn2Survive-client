import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import PageNotFound from '../pages/common/PageNotFound'
import VerifyEmail from '../pages/auth/VerifyEmail'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="verifyEmail/:email" element={<VerifyEmail />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="reset-Password/:token" element={<ResetPassword />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AuthRoutes
