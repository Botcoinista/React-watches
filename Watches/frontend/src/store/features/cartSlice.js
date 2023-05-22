import { createSlice } from '@reduxjs/toolkit'


//This is the startingvalue of the cart.
const initialState = {
    cart: [],
    totQty: 0,
    totAmount: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //Check if product allready is in the cart.
            const itemRef = state.cart.find(item => item.product._id === action.payload._id)

            itemRef
            //If it exists in the cart
            ? itemRef.quantity += 1
            //If it doesnt exist, spread out the obj in the cart and add an object from payload.
            : state.cart = [...state.cart, { product: action.payload, quantity: 1 }]
        },
        removeOneItem: (state, action) => {
            const itemRef = state.cart.find(item => item.product._id === action.payload._id)

            itemRef.quantity < 2
            //Keeps all that does not match the id of the selected product.
            ? state.cart = state.cart.filter(item => item.product._id !== action.payload._id)
            : itemRef.quantity -= 1

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.product._id !== action.payload._id)
        }
    }
})

export const { addToCart, removeOneItem, removeFromCart } = cartSlice.actions

export default cartSlice.reducer