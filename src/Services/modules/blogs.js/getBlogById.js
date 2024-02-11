export default build =>
    build.query({
        tagTypes: ['blogById'],
        keepUnusedDataFor: 30,
        query(payload) {
            //console.log("payload",payload)            
            return {
                url: `/blog/getblogbyid?id=${payload.id}`,
                method: 'GET',
               // body: payload,
            };
           
        },
       providesTags: ['blogById']
    })
