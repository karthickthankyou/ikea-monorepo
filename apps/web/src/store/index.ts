import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { from } from 'rxjs'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './user'
import { notificationsReducer } from './notifications'
import { searchReducer } from './search'

export const store = configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const composedEnhancers = composeWithDevTools()

export const store$ = from(store)
export type StoreObservableType = typeof store$
