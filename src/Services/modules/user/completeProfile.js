export default build =>
    build.mutation({
        query(payload) {
          //  console.log("payload",payload)
            return {
                url: '/auth/createUserProfile',
                method: 'POST',
                body: payload,
            };
        }
       
    })
