export default build =>
    build.query({
        tagTypes: ['allBooks'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/book/getAllBooks',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allBooks']
    })
