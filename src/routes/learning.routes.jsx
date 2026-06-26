import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/learning/Dashboard'
import PageNotFound from '../pages/common/PageNotFound'

const LearningRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default LearningRoutes
