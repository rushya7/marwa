// import logo from './logo.svg';
// import './App.css';
import React,{useEffect} from 'react'

import AppRoutes from './AppRoutes';

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/style.css'
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { store } from './Store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';
import WhatsAppLogo from './Components/Whatsapplogo';
//import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
let persistor=persistStore(store)
function App() {
 
  return (
    <>
   <Provider store={store}>
    
   <PersistGate loading={null} persistor={persistor}>
   </PersistGate>
   <GoogleOAuthProvider clientId="1074395192371-vj1emb83k3vfd724131v7j6fccq3ui31.apps.googleusercontent.com">
   <WhatsAppLogo/>
   
   <AppRoutes/>
   </GoogleOAuthProvider>
   </Provider>
    
    </>
  );
}

export default App;
