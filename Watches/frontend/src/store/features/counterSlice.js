import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1
}


//Creating a slice with the initilState as 1.
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

//Exporting reducer - Should be imported to store/index.
export default counterSlice.reducer

