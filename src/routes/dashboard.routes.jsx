import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/common/PageNotFound'
import DashboardHomePage from '../pages/dashboard/DashboardHomePage'
import DisasterDetailsPage from '../pages/learning/DisasterDetailsPage'
import LearningCenterPage from '../pages/learning/LearningCenterPage'
import QuizCenterPage from '../pages/learning/QuizCenterPage'
import QuizStart from '../pages/learning/QuizStart'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DashboardHomePage />} />
      <Route path="diaster/detail" element={<DisasterDetailsPage />} />
      <Route path="learning-center" element={<LearningCenterPage />} />
      <Route path="disaster/:slug" element={<DisasterDetailsPage />} />
      <Route path="quizzes" element={<QuizCenterPage />} />
      <Route path="quizzes/start" element={<QuizStart />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default DashboardRoutes
