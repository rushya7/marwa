import React,{useEffect,useRef,useState} from 'react'
import WebTemplate from '../Components/WebTemplate'

import SuccessVideoSection from '../Components/SuccessVideosSection';

import { useGetAllTestimonialsQuery } from '../Services/modules/testimonials';
function VideoGallery() {

    const VideoGalleryScreen=()=>{  
    
        return(
            <>
          
              <main id="main">
          

              <section id="clients" class="clients" style={{marginTop:"60px"}}>
      <div class="container-fluid">

     
        <div className='row' style={{marginTop:"2px"}}>
       
      
       {/* <SuccessVideoSection/> */}
       {/* {!isTestimonialsLoading? 
        <SuccessVideoSection 
        data={allTestimonials} 
         for_course={"overall"}
         caption={"Testimonials"}
         />:""}
  */}
 
        <SuccessVideoSection 
        data={[]} 
         for_course={"overall"}
         caption={"Testimonials"}
         />
 
 
        </div>
     

      </div>
    </section>
  

</main>
            </>
        )
    }
  return (
  <WebTemplate>
    {VideoGalleryScreen()}
  </WebTemplate>
  )
}

export default VideoGallery