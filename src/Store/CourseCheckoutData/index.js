import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'courseCheckoutData',
    initialState: { course_checkout_data: null },
    reducers: {
        updateCourseCheckoutData: (state, { payload: { data } }) => {
            state.course_checkout_data = data
        },
        clearCourseCheckoutData: (state, { }) => {
            state.course_checkout_data = null
        },
    },
})

export const { updateCourseCheckoutData, clearCourseCheckoutData } = slice.actions

export default slice.reducer
