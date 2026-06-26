import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/dashboard/Home'
import PageNotFound from '../pages/common/PageNotFound'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default DashboardRoutes
