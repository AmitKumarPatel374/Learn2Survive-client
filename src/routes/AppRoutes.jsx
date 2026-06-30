import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import DashboardLayout from "../layouts/DashboardLayout"
import AuthLayout from "../layouts/AuthLayout"

import Home from "../pages/dashboard/Home"
import About from "../pages/public/About"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import UnAuthorized from "../pages/common/UnAuthorized"
import PageNotFound from "../pages/common/PageNotFound"

import DashboardRoutes from "./dashboard.routes"
import LearningRoutes from "./learning.routes"
import UserRoutes from "./user.routes"
import AuthRoutes from "./auth.routes"
import ProtectedRoute from "../components/common/ProtectedRoute"
import LandingPage from "../pages/public/LandingPage"
import PrivacyPolicy from "../pages/public/PrivacyPolicy"
import TermsAndConditions from "../pages/public/TermsAndConditions"
import ContactSupport from "../pages/public/ContactSupport"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />
      <Route
        path="/terms-conditions"
        element={<TermsAndConditions />}
      />
      <Route
        path="/contact-support"
        element={<ContactSupport />}
      />
      {/* Main Layout */}
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/learning/*"
          element={
            <ProtectedRoute>
              <LearningRoutes />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Dashboard Layout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="/dashboard/*"
          element={<DashboardRoutes />}
        />
        <Route
          path="/user/*"
          element={<UserRoutes />}
        />
      </Route>

      {/* Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route
          path="/auth/*"
          element={<AuthRoutes />}
        />
      </Route>

      {/* Common */}
      <Route
        path="/unauthorized"
        element={<UnAuthorized />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  )
}

export default AppRoutes
