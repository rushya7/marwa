import { api } from '../../api'

import getQuotes from './getQuotes'
import getYoutubeDetails from './getYoutubeDetails'


export const otherInfoApi = api.injectEndpoints({
    endpoints: build => ({
        GetAllQuotes: getQuotes(build),  
        GetYoutubeDetails:getYoutubeDetails(build)       
      
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {
    useGetAllQuotesQuery, 
    useGetYoutubeDetailsQuery
   
    } = 
    otherInfoApi
