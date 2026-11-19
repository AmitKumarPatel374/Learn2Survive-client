import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SendNotificationPage from '../pages/admin/notification/SendNotificationPage'
import PageNotFound from '../pages/common/PageNotFound'
import NotificationHistoryPage from '../pages/admin/notification/NotificationHistoryPage'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="send-notification" element={<SendNotificationPage />} />
      <Route path="history" element={<NotificationHistoryPage />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AdminRoutes
