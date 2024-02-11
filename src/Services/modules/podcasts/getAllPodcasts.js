export default build =>
    build.query({
        tagTypes: ['allPodcasts'],
        keepUnusedDataFor: 1,
        query() {
            //console.log("payload",payload)            
            return {
                url: '/podcast/getPodcastsSpotify',
                method: 'GET',
                //body: payload,
            };
           
        },
       providesTags: ['allPodcasts']
    })
