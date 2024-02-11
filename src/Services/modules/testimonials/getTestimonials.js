export default build =>
    build.query({
        tagTypes: ['allTestimonials'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/testimonial/getAllTestimonials',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allTestimonials']
    })
