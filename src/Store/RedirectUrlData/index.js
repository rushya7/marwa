import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'urlData',
    initialState: { url_data: null },
    reducers: {
        updateUrlData: (state, { payload: { data } }) => {
            state.url_data = data
        },
        clearUrlData: (state, { }) => {
            state.url_data = null
        },
    },
})

export const { updateUrlData, clearUrlData } = slice.actions

export default slice.reducer
