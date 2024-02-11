export default build =>
    build.mutation({      
        query(payload) {
           // console.log("create admission order",payload)            
            return {
                url: '/admission/confirmOrder',
                method: 'POST',
                body: payload,
            };
           
        },
     
    })



