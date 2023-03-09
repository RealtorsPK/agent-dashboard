import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: null,
}

const loginDetails = createSlice({
  initialState,
  name: 'loginDetails',
  reducers: {
    setLoginDetails: (state, action) => {
      // eslint-disable-next-line no-param-reassign

      state.login = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
const { setLoginDetails } = loginDetails.actions

export { loginDetails, setLoginDetails }

export default loginDetails.reducer
