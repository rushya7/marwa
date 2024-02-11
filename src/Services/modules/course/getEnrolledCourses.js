export default build =>
    build.query({
        tagTypes: ['enrolledCourses'],
        keepUnusedDataFor: 30,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/enroll/getenrolledcourses',
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['enrolledCourses']
    })
