import { api } from '../../api'
import getAllBlogs from './getAllBlogs'
import getBlogById from './getBlogById'

export const blogsApi = api.injectEndpoints({
    endpoints: build => ({
        GetAllBlogs: getAllBlogs(build),  
        GetBlogById:getBlogById(build)
       
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {
    useGetAllBlogsQuery, 
    useGetBlogByIdQuery
 
    } = 
    blogsApi
