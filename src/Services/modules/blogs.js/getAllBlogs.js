export default build =>
    build.query({
        tagTypes: ['allBlogs'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/blog/getblogs',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allBlogs']
    })
