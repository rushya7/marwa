export default build =>
    build.mutation({
        query(payload) {
           // console.log("payload",payload)
            return {
                url: '/enroll/verifypaymentandcheckout',
                method: 'POST',
                body: payload,
            };
        },
       invalidatesTags: ['enrolledCourses'],       
    })
