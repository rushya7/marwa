import React,{useEffect,useRef,useState} from 'react'
import WebTemplate from '../Components/WebTemplate'
import GLightbox from 'glightbox';

import sponge1 from '../assets/img/photogallery/sponge1.jpeg'
import sponge2 from '../assets/img/photogallery/sponge2.jpeg'
import sponge3 from '../assets/img/photogallery/sponge3.jpeg'

import cupcake1 from '../assets/img/photogallery/cupcake1.jpeg'
import cupcake2 from '../assets/img/photogallery/cupcake2.jpeg'

import cookie1 from '../assets/img/photogallery/cookie1.jpeg'
import cookie2 from '../assets/img/photogallery/cookie2.jpeg'
import cookie3 from '../assets/img/photogallery/cookie3.jpeg'
import cookie4 from '../assets/img/photogallery/cookie4.jpeg'
import cookie5 from '../assets/img/photogallery/cookie5.jpeg'

import teatimecake1 from '../assets/img/photogallery/teatimecake1.jpeg'
import teatimecake2 from '../assets/img/photogallery/teatimecake2.jpeg'
import teatimecake3 from '../assets/img/photogallery/teatimecake3.jpeg'
import teatimecake4 from '../assets/img/photogallery/teatimecake4.jpeg'

import advancecake1 from '../assets/img/photogallery/advancecake1.jpeg'
import advancecake2 from '../assets/img/photogallery/advancecake2.jpeg'
import advancecake3 from '../assets/img/photogallery/advancecake3.jpeg'
import advancecake4 from '../assets/img/photogallery/advancecake4.jpeg'
import advancecake5 from '../assets/img/photogallery/advancecake5.jpeg'
import advancecake6 from '../assets/img/photogallery/advancecake6.jpeg'
import advancecake7 from '../assets/img/photogallery/advancecake7.jpeg'
import advancecake8 from '../assets/img/photogallery/advancecake8.jpeg'
import advancecake9 from '../assets/img/photogallery/advancecake9.jpeg'

import chocolate1 from '../assets/img/photogallery/chocolate1.jpeg'
import chocolate2 from '../assets/img/photogallery/chocolate2.jpeg'
import chocolate3 from '../assets/img/photogallery/chocolate3.jpeg'
import chocolate4 from '../assets/img/photogallery/chocolate4.jpeg'
import chocolate5 from '../assets/img/photogallery/chocolate5.jpeg'

import biginnercake1 from '../assets/img/photogallery/biginnercake1.jpeg'
import basicdesignercake1 from '../assets/img/photogallery/basicdesignercake1.jpeg'



function PhotoGallery() {
    const galleryRef = useRef(null);

    const PhotoGalleryScreen=()=>{  
        useEffect(() => {
            if (galleryRef.current) {
              // Initialize GLightbox
              const lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true, // Enable touch navigation
                loop: true, // Enable looping through images
                closeButton: true, // Show close button
                nextButton: true, // Show next button
                prevButton: true, // Show previous button
              });
            }
          }, []);
        return(
            <>
          
              <main id="main">
              <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row" style={{textAlign:'center',marginTop:"80px"}}>
  
    <div class="col-lg-12 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
    <h1 style={{fontSize:"30px"}}>
       
               Check Sponges, Cookies, Cakes and Chocolates made by us  
               
       
        </h1>
    </div>
   
  </div>
  
</div>

</section>


              <section id="clients" class="clients">
      <div class="container">

        <div class="row" data-aos="zoom-in">
    
<div className='col-md-12'>
<div class="section-title">
      <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>Our Sponges</h2>
      
    </div>
    <div ref={galleryRef}>
    <div class="row gallery">
        <div class="col-xl-4 col-md-6" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
              <a
        href={sponge1}
        className="glightbox"
        data-title="Sponge"      
      >
              <div className="course-card">
              <img src={sponge1} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
    </h3>
     
   
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
               <a
        href={sponge2}
        className="glightbox"
        data-title="Sponge"
       
      >
              <div className="course-card">
              <img src={sponge2} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
   </h3>         
</div>
              
                </a>             
           </div>
<div class="col-xl-4 col-md-6" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
             <a
        href={sponge3}
        className="glightbox"
        data-title="Sponge"
       
      >
              <div className="course-card">
              <img src={sponge3} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   </h3>    
</div>
              
                </a>             
           </div>
         
        </div>
    </div>
   

</div>
        </div>
        <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
          Our Cupcakes
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={cupcake1}
            className="glightbox"
            data-title="Cupcake"      
          >
                  <div className="course-card">
                  <img src={cupcake1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={cupcake2}
            className="glightbox"
            data-title="Sponge"
           
          >
                  <div className="course-card">
                  <img src={cupcake2} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
            </div>
        </div>
       
    
    </div>
            </div>
            <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
          Our Cookies
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={cookie1}
            className="glightbox"
            data-title="Cookie"      
          >
                  <div className="course-card">
                  <img src={cookie1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={cookie2}
            className="glightbox"
            data-title="Cookie"
           
          >
                  <div className="course-card">
                  <img src={cookie2} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={cookie3}
            className="glightbox"
            data-title="Cookie"
           
          >
                  <div className="course-card">
                  <img src={cookie3} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div> 
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={cookie4}
            className="glightbox"
            data-title="Cookie"
           
          >
                  <div className="course-card">
                  <img src={cookie4} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={cookie5}
            className="glightbox"
            data-title="Cookie"
           
          >
                  <div className="course-card">
                  <img src={cookie5} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
            </div>
        </div>
       
    
    </div>
            </div>
            <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
         Our Tea Time Soft Cakes
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={teatimecake1}
            className="glightbox"
            data-title="Tea time soft cake"      
          >
                  <div className="course-card">
                  <img src={teatimecake1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={teatimecake2}
            className="glightbox"
            data-title="Tea time soft cake"
           
          >
                  <div className="course-card">
                  <img src={teatimecake2} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={teatimecake3}
            className="glightbox"
            data-title="Tea time soft cake"
           
          >
                  <div className="course-card">
                  <img src={teatimecake3} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div> 
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={teatimecake4}
            className="glightbox"
            data-title="Tea time soft cake"
           
          >
                  <div className="course-card">
                  <img src={teatimecake4} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
              
            </div>
        </div>
       
    
    </div>
            </div>
            <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
         Our Advanced Designer Cakes
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={advancecake1}
            className="glightbox"
            data-title="Advanced designer cake"      
          >
                  <div className="course-card">
                  <img src={advancecake1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake2}
            className="glightbox"
            data-title="Advanced desiner cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake2} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake3}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake3} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div> 
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake4}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake4} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake5}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake5} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake6}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake6} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>  
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake7}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake7} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>   <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake8}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake8} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div>   <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
                   <a
            href={advancecake9}
            className="glightbox"
            data-title="Advanced designer cake"
           
          >
                  <div className="course-card">
                  <img src={advancecake9} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
       </h3>         
    </div>
                  
                    </a>             
               </div> 
            </div>
        </div>
       
    
    </div>
            </div>
            <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
         Our Chocolates
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={chocolate1}
            className="glightbox"
            data-title="Chocolate"      
          >
                  <div className="course-card">
                  <img src={chocolate1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={chocolate2}
            className="glightbox"
            data-title="Chocolate"      
          >
                  <div className="course-card">
                  <img src={chocolate2} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={chocolate3}
            className="glightbox"
            data-title="Chocolate"      
          >
                  <div className="course-card">
                  <img src={chocolate3} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={chocolate4}
            className="glightbox"
            data-title="Chocolate"      
          >
                  <div className="course-card">
                  <img src={chocolate4} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={chocolate5}
            className="glightbox"
            data-title="Chocolate"      
          >
                  <div className="course-card">
                  <img src={chocolate5} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        
        </h3>
         
       
    </div>
                  
                    </a>             
               </div>
             
            </div>
        </div>
       
    
    </div>
            </div>
            <div class="row" data-aos="zoom-in">
    
    <div className='col-md-12'>
    <div class="section-title">
          <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>
         Cakes Made In Our Classes
            </h2>
          
        </div>
        <div ref={galleryRef}>
        <div class="row gallery">
            <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={biginnercake1}
            className="glightbox"
            data-title="Beginner cake class"      
          >
                  <div className="course-card">
                  <img src={biginnercake1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        <span style={{color:"#fb28a4"}}>Beginner's cake class</span></h3>
         
       
    </div>
                  
                    </a>             
               </div>
               <div class="col-xl-4 col-md-6" 
    style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">          
                  <a
            href={basicdesignercake1}
            className="glightbox"
            data-title="Basic designer cake class"      
          >
                  <div className="course-card">
                  <img src={basicdesignercake1} className="course-image" alt="Course Thumbnail" />
    
       <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
        <span style={{color:"#fb28a4"}}>Basic designer cake class</span></h3>
         
       
    </div>
                  
                    </a>             
               </div>
             
            </div>
        </div>
       
    
    </div>
            </div>
      

      </div>
   
    </section>
  
</main>
            </>
        )
    }
  return (
  <WebTemplate>
    {PhotoGalleryScreen()}
  </WebTemplate>
  )
}

export default PhotoGallery