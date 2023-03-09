import { configureStore } from '@reduxjs/toolkit'
import loginDetails from './action-reducers/loginDetails'

export const store = configureStore({
    reducer: {
        loginDetails: loginDetails,
    },
})