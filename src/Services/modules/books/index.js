import { api } from '../../api'

import createBook from './createBook'
import getAllBooks from './getAllBooks'
import deleteBook from './deleteBook'

export const booksApi = api.injectEndpoints({
    endpoints: build => ({
        GetAllBooks: getAllBooks(build),         
        CreateBook:createBook(build),
        DeleteBook:deleteBook(build)
        
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {
    useCreateBookMutation, 
    useGetAllBooksQuery,
    useDeleteBookMutation} = booksApi
