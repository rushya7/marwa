export default build =>
    build.query({
        tagTypes: ['allRecordedLive'],
        keepUnusedDataFor: 30,
        query(payload) {
            //console.log("payload",payload)            
            return {
                url: `/enroll/getrecordedlive?course_id=${payload.course_id}`,
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['allRecordedLive']
    })
