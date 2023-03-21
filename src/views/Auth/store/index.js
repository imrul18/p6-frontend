// import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api from '../../../http'

export const Signin = createAsyncThunk('Auth/Signin', async (data) => {
  const response = await Api.post('login', data)  
  return response.data
})

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    UserData: [],
    accessToken: null
  },
  extraReducers: builder => {
    builder
      .addCase(Signin.fulfilled, (state, action) => {
        localStorage.setItem('userData', JSON.stringify(action.payload?.user))
        localStorage.setItem('accessToken', JSON.stringify(action.payload?.accessToken))
        state.UserData = action.payload?.user
        state.accessToken = action.payload?.accessToken
      })
    }
})

export default AuthSlice.reducer
