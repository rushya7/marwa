import { api } from '../../api'

import getAllPodcasts from './getAllPodcasts'

export const podcastApi = api.injectEndpoints({
    endpoints: build => ({
            
        GetAllPodcasts:getAllPodcasts(build),
      
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {useGetAllPodcastsQuery} = podcastApi
