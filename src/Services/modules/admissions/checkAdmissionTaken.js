export default build =>
    build.query({
        tagTypes: ['admissionTaken'],
        keepUnusedDataFor: 1,
        query() {
           // console.log("check eligibility")            
            return {
                url: '/admission/checkAdmissionTaken',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['admissionTaken']
    })
