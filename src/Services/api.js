import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Config } from '../Config'

export const api = createApi({
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: Config.API_URL_LOCAL, 
        prepareHeaders: (headers, { getState }) => { 
         // console.log("getState()",getState())  
          if(getState().userData.user_data)
          {
          const user = getState().userData.user_data.token
 
headers.set('Authorization', `Bearer ${user}`)
//headers.set('Authorization', `Bearer asdadad`)
          }     
       //   headers.set('Authorization', `Bearer asdadad`)  
            return headers
          }
 }),
  endpoints: () => ({}),
})

