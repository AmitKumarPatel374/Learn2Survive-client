import React from 'react'
import UserRoutes from './routes/AppRoutes'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/*"
            element={<UserRoutes />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
    </div>
  )
}

export default App
