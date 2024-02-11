export default build =>
    build.mutation({
        query(payload) {
           // console.log("payload",payload)
            return {
                url: '/book/deletebook',
                method: 'POST',
                body: payload,
               
            };
        },
        invalidatesTags: ['allBooks'],
    })
