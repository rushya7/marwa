import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'courseCheckoutData',
    initialState: { book_checkout_data: null },
    reducers: {
        updateBookCheckoutData: (state, { payload: { data } }) => {
            state.book_checkout_data = data
        },
        clearBookCheckoutData: (state, { }) => {
            state.book_checkout_data = null
        },
    },
})

export const { updateBookCheckoutData, clearBookCheckoutData } = slice.actions

export default slice.reducer
