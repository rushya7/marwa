export default build =>
    build.query({
        tagTypes: ['allNotes'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/notes/getAllNotes',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allNotes']
    })
