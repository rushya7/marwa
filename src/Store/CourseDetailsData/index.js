import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'courseDetailsData',
    initialState: { course_details_data: null },
    reducers: {
        updateCourseDetailsData: (state, { payload: { data } }) => {
            state.course_details_data = data
        },
        clearCourseDetailsData: (state, { }) => {
            state.course_details_data = null
        },
    },
})

export const { updateCourseDetailsData, clearCourseDetailsData } = slice.actions

export default slice.reducer
