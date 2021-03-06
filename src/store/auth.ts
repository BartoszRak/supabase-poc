import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../shared/user'

export interface AuthState {
 user: User | null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
      user: null
  } as AuthState,
  reducers: {
    setUser: (state: AuthState, { payload }: PayloadAction<User>) => {
      state.user = payload
    },
  },
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer
