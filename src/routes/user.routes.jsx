import React from "react"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "../pages/common/PageNotFound"
import ProfileSetup from "../pages/user/ProfileSetup"
import EditProfile from "../pages/user/EditProfile"
import ProfilePage from "../pages/user/ProfilePage"
import SettingsPage from "../pages/public/SettingsPage"

const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="profileSetup"
        element={<ProfileSetup />}
      />
      <Route
        path="edit-profile"
        element={<EditProfile />}
      />
      <Route
        path="my-profile"
        element={<ProfilePage />}
      />
      <Route
        path="settings"
        element={<SettingsPage />}
      />

      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  )
}

export default UserRoutes
