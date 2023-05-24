import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import cartSlice from './features/cartSlice'
//import authSlice from './features/auth/authSlice'

export const store  = configureStore({
    reducer: {
        //The name here is = state.counter f.ex.
        counter: counterSlice,
        cart: cartSlice
 //auth: authSlice

    }
})