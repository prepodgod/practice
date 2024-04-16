import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        totalPrice: 0,
        products: []

    },
    reducers: {
        addProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload)
            if (findProduct) {
                findProduct.count++
            }
            else {
                state.products.push({ ...action.payload, count: 1 })
            }

            state.totalPrice = state.products.reduce((sum, obj) => {

                return obj.price + sum
            }, 0)
        },
        removeProduct(state, action) {
            state.products.filter(obj => obj.id === action.payload)
        },
        clearProducts(state) {
            state.products = [];
        }
    },


})

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions

export default cartSlice.reducer
