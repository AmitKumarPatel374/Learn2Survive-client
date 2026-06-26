import React from 'react'
import Home from '../pages/dashboard/Home'
import About from '../pages/public/About'
import AuthRoutes from './auth.routes'
import DashboardRoutes from './dashboard.routes'
import LearningRoutes from './learning.routes'
import UnAuthorized from '../pages/common/UnAuthorized'
import PageNotFound from '../pages/common/PageNotFound'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes >
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Modules */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/user/*" element={<DashboardRoutes />} />
      <Route path="/learning/*" element={<LearningRoutes />} />

      {/* Fallback */}
      <Route path="/unauthorized" element={<UnAuthorized />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
