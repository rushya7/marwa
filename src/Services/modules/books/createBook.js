export default build =>
    build.mutation({
        query(payload) {
           // console.log("payload",payload)
            return {
                url: '/book/createbook',
                method: 'POST',
                body: payload,
               
            };
        },
        invalidatesTags: ['allBooks'],
    })
