export default build =>
    build.query({
        tagTypes: ['allQuotes'],
        keepUnusedDataFor: 30,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/otherinfo/getAllYoutubeDetails',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allYoutubeDetails']
    })
