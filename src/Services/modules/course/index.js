
import { api } from '../../api'

import getAllCourses from './getAllCourses'
import createPaymentOrder from './createPaymentOrder'
import submitPaymentOrder from './submitPaymentOrder'
import getEnrolledCourses from './getEnrolledCourses'
import getEnrolledCourseDetails from './getEnrolledCourseDetails'
import getRecordedVideos from './getRecordedVideos'
import getEnrolledCoursesForLiveClasses from './getEnrolledCoursesForLiveClasses'
import getRecordedVideosFree from './getRecordedVideosFree'
import getRecordedLive from './getRecordedLive'

export const courseApi = api.injectEndpoints({
    endpoints: build => ({
      
        GetAllCourses:getAllCourses(build),
        GetEnrolledCourses:getEnrolledCourses(build),
        GetEnrolledCoursrsForLiveClasses:getEnrolledCoursesForLiveClasses(build),
        GetEnrolledCourseDetails:getEnrolledCourseDetails(build),
        CreatePaymentOrder:createPaymentOrder(build),
        SubmitPaymentOrder:submitPaymentOrder(build),
        GetRecordedVideos:getRecordedVideos(build),
        GetRecordedVideosFree:getRecordedVideosFree(build),
        GetRecordedLive:getRecordedLive(build)
    }),
    overrideExisting: true,
})
export const {
    
     useGetAllCoursesQuery,
     useGetEnrolledCoursesQuery,
     useGetEnrolledCoursrsForLiveClassesQuery,
     useCreatePaymentOrderMutation,
     useSubmitPaymentOrderMutation,
     useGetEnrolledCourseDetailsQuery,
     useGetRecordedVideosQuery,
     useGetRecordedVideosFreeQuery,
     useGetRecordedLiveQuery

    } = courseApi
