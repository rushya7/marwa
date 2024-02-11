import { api } from '../../api'

import getTestimonials from './getTestimonials'

export const testimonialsApi = api.injectEndpoints({
    endpoints: build => ({
        GetAllTestimonials: getTestimonials(build),         
      
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const { useGetAllTestimonialsQuery} = testimonialsApi
