export default build =>
    build.mutation({
        query(payload) {
           // console.log("payload",payload)
            return {
                url: '/enroll/paymentorder',
                method: 'POST',
                body: payload,
            };
        }
       
    })
