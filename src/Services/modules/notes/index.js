import { api } from '../../api'

import getAllNotes from './getAllNotes'

export const notesApi = api.injectEndpoints({
    endpoints: build => ({
        GetAllNotes: getAllNotes(build),         
      
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {useGetAllNotesQuery} = notesApi
