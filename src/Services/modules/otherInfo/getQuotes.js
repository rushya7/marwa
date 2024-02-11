export default build =>
    build.query({
        tagTypes: ['allQuotes'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/otherinfo/getquotes',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allQuotes']
    })
