import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../Services/api'
import bookCart from './BookCart'
import bookDetails from './BookDetails'

import userData from './UserData'
import urlData from './RedirectUrlData'

import userProfileData from './UserProfileData'
import courseDetailsData from './CourseDetailsData'
import courseCheckoutData from './CourseCheckoutData'
import bookCheckoutData from './BookCheckoutData'

import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage:storageSession,
};

const reducers = combineReducers({  
    userData, 
   
    userProfileData,
    courseDetailsData,
    courseCheckoutData,
    bookCheckoutData,
     urlData,
     bookCart,
     bookDetails,
     api: api.reducer,
  })
  const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware)

});

setupListeners(store.dispatch);