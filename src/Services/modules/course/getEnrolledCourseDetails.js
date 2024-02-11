export default build =>
    build.query({
        tagTypes: ['enrolledCourseDetails'],
        keepUnusedDataFor: 30,
        query(payload) {
            //console.log("payload",payload)            
            return {
                url: `/enroll/getenrolledcoursedetails?course_id=${payload.course_id}`,
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['enrolledCourseDetails']
    })
