export default build =>
    build.query({
        tagTypes: ['admissionEligibility'],
        keepUnusedDataFor: 1,
        query() {
           // console.log("check eligibility")            
            return {
                url: '/admission/checkEligibility',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['admissionEligibility']
    })
