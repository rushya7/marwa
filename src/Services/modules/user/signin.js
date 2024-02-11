export default build =>
    build.mutation({
        query(payload) {
           // console.log("payload",payload)
            return {
              //  url: '/auth/book/signin',
              url: '/auth/signin',

                method: 'POST',
                body: payload,
            };
        }
       
    })
