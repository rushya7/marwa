import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'userProfileData',
    initialState: { user_profile_data: null },
    reducers: {
        updateUserProfileData: (state, { payload: { data } }) => {
            state.user_profile_data = data
        },
        clearUserProfileData: (state, { }) => {
            state.user_profile_data = null
        },
    },
})

export const { updateUserProfileData, clearUserProfileData } = slice.actions

export default slice.reducer
