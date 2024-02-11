export default build =>
    build.query({
        tagTypes: ['allRecordedCourses'],
        keepUnusedDataFor: 30,
        query(payload) {
            //console.log("payload",payload)            
            return {
                url: `/enroll/getrecordedvideos?course_id=${payload.course_id}`,
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['allRecordedCourses']
    })
