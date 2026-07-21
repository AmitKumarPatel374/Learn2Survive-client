import React from "react"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "../pages/common/PageNotFound"
import QuizPage from "../pages/learning/QuizPage"
import QuizResultPage from "../pages/learning/QuizResultPage"

const LearningRoutes = () => {
  return (
    <Routes>
      <Route
        path="quiz/:attemptId"
        element={<QuizPage />}
      />
      <Route
        path="quiz/result/:attemptId"
        element={<QuizResultPage />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  )
}

export default LearningRoutes
