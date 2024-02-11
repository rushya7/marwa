
export default build =>
    build.query({
        tagTypes: ['enrolledCoursesForLiveClasses'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/enroll/getEnrolledCoursesForLiveClasses',
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['enrolledCoursesForLiveClasses']
    })
