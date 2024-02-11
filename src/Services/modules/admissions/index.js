import { api } from '../../api'
import checkAdmissionTaken from './checkAdmissionTaken'

import checkEligibility from './checkEligibility'
import confirmOrder from './confirmOrder'
import createOrder from './createOrder'

export const admissionApi = api.injectEndpoints({
    endpoints: build => ({
        CheckEligibility: checkEligibility(build),         
        CheckAdmissionTaken:checkAdmissionTaken(build),
        CreateOrder:createOrder(build),
        ConfirmOrder:confirmOrder(build)
    }),
    overrideExisting: true,
    //providesTags: ['Research']
})
export const {
    useCheckEligibilityQuery,
    useCheckAdmissionTakenQuery,
    useCreateOrderMutation,
    useConfirmOrderMutation
} = admissionApi
