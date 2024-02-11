export default build =>
    build.query({
        tagTypes: ['allCourses'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/course/getAllCourses',
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['allCourses']
    })
