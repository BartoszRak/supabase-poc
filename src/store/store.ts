import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth'
import { kittiesReducer } from './kitties'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    kitties: kittiesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
