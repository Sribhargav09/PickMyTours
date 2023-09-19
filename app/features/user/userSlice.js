import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginUser: '',
    token: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.loginUser = action.payload
    },
    setToken: (state, action) => {
        state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer