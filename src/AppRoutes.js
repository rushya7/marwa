import React,{useEffect} from 'react'
//import { useSelector } from 'react-redux'
import { 
    Route,
    Routes,     
    Navigate,
    Outlet, } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About';

import Contact from './Pages/Contact';
import ClassDetails from './Pages/ClassDetails';
import VideoGallery from './Pages/VideoGallery';
import PhotoGallery from './Pages/PhotoGallery';


function AppRoutes() {
 
  return (
    <>
   
    <Routes>
        <Route index element={<Home/>}/>
       
        <Route path="/classdetails" element={<ClassDetails/>}/>
       
        <Route path="/contact" element={<Contact/>}/>

       
        <Route path="/about" element={<About/>}/>
       
        <Route path="/videogallery" element={<VideoGallery/>}/>
        <Route path="/photogallery" element={<PhotoGallery/>}/>

    </Routes>
    </>
  )
}

export default AppRoutes