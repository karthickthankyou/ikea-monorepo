import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export type NotificationSliceType = {
  notifications: NotificationType[]
}

const initialState: NotificationSliceType = {
  notifications: [],
}

export type NotificationType = {
  id: string
  message: ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center'
}

const notificationsSlice = createSlice({
  name: 'Notifications',
  initialState,
  reducers: {
    sendNotification: (state, action: PayloadAction<NotificationType>) => {
      state.notifications.push(action.payload)
    },
    removeNotification: (
      state,
      action: PayloadAction<NotificationType['id']>,
    ) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      )
    },
    resetNotifications: (state) => {
      state = initialState
    },
  },
})

export const { sendNotification, removeNotification, resetNotifications } =
  notificationsSlice.actions

export const notificationsReducer = notificationsSlice.reducer
