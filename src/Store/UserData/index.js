import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'userData',
    initialState: { user_data: null },
    reducers: {
        updateUserData: (state, { payload: { data } }) => {
            state.user_data = data
        },
        clearUserData: (state, { }) => {
            state.user_data = null
        },
    },
})

export const { updateUserData, clearUserData } = slice.actions

export default slice.reducer
