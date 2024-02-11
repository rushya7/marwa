import { api } from '../../api'
import completeProfile from './completeProfile'

import signin from './signin'
import signup from './signup'


export const signinApi = api.injectEndpoints({
    endpoints: build => ({
        Signin: signin(build), 
        Signup:signup(build),
        CompleteProfile:completeProfile(build)      
    }),
    overrideExisting: true,
})
export const { useSigninMutation,useSignupMutation,useCompleteProfileMutation } = signinApi
