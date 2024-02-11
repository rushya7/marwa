export default build =>
    build.query({
        tagTypes: ['recordedVideosFree'],
        keepUnusedDataFor: 30,
        query(payload) {
            //console.log("payload",payload)            
            return {
                url: `/enroll/getEnrolledCourseContentForLiveClasses?course_id=${payload.course_id}&&content_type=${"recorded_videos"}`,
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['recordedVideosFree']
    })
