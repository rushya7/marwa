import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'bookDetailsData',
    initialState: { book_data: null },
    reducers: {
        updateBookDetailsData: (state, { payload: { data } }) => {
            state.book_data = data
        },
        clearBookDetailsData: (state, { }) => {
            state.book_data = null
        },
    },
})

export const { updateBookDetailsData, clearBookDetailsData } = slice.actions

export default slice.reducer
