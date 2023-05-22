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
            if (state.value < 0) { //If the value is less than 0, set it to 0.
                state.value = 0;
            }
        }
    }
})

//Here we are exporting the actions/functionality
export const { increment, decrement } = counterSlice.actions

//Exporting reducer - Should be imported to store/index.
export default counterSlice.reducer

