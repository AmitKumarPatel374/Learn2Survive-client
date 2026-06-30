// context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react"
import apiInstance from "../config/apiInstance"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)
  const getCurrentUser = async () => {
    try {
      const response = await apiInstance.get("/auth/profile")
      setUser(response.data.user)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
