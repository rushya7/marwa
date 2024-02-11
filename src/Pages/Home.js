import React,{useEffect,useRef,useState} from 'react'
import WebTemplate from '../Components/WebTemplate'

import softcakes from '../assets/img/class/softcakes.jpg'
import cookies from '../assets/img/class/cookies.jpg'
import sponge from '../assets/img/class/sponge.jpg'
import cupcakes from '../assets/img/class/cupcakes.jpg'
import beginnercakeclass from '../assets/img/class/beginnercakeclass.jpg'
import basicdesignercakeclass from '../assets/img/class/basicdesignercakeclass.jpg'
import advancedesigningcakeclass from '../assets/img/class/advancedesigningcakeclass.jpg'


import 'glightbox/dist/css/glightbox.min.css';

import VideoPopup from '../Components/VideoPopup';

import { useGetAllNotesQuery } from '../Services/modules/notes';

import { useNavigate } from 'react-router-dom';
//import homeBackgroundVideo from '../assets/videos/homebg.mp4'; // Import the video file
//import { useGetAllTestimonialsQuery } from '../Services/modules/testimonials';
import { useDispatch } from 'react-redux';

import SuccessVideoSection from '../Components/SuccessVideosSection.js';

import cupcakeclass from '../assets/img/cupcakeclass.mp4'; // Import the video file
import cakeclass from '../assets/img/class/cakeclass.jpeg'; // Import the video file
import teatimecakeclass from '../assets/img/teatimecakeclass.mp4'; // Import the video file
import teatimeclass2feb from '../assets/img/teatimeclass2feb.jpeg'; // Import the video file



function Home() {
  const dispatch=useDispatch()
  const navigate = useNavigate()

const goToClassDetails=(param)=>{ 
  navigate({
    pathname: "/classdetails",
    search: `?classname=${param}`,
  });
 }

    const HomeScreen=()=>{        
        return(
            <>
                        
<section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
      <h1 class="text-center" style={{color:"#f82884"}}>Welcome to <span style={{color:"#ac00ac", fontFamily: 'Algerian, cursive'}}>Pallavi's</span> Delicious Treats</h1>
      <h2 class="text-center" style={{color:'white'}}>Create, Enjoy, Explore</h2>
    
        <VideoPopup videoId="X2JYmZCZcW4" />
  
    </div>
  </div>
</div>

</section>
 
              <main id="main">

<section id="about" class="about">
  <div class="container" data-aos="fade-up">
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <h2 style={{ color: 'black', marginBottom: "0px",fontSize:'25px' }}>
      <span style={{ color: "#ac00ac", fontFamily: 'Algerian, cursive' }}>
      <span style={{ color: "#ac00ac", fontFamily: 'Algerian, cursive'
    
    }}
      > 
    
       </span>
    
      </span>
    </h2>
              <img src={teatimeclass2feb} style={{width:"40%"}}  alt="Course Thumbnail" />

    </div>
     {/* <div class="section-title">
     <video width="50%" height="50%" controls>
        <source src={teatimecakeclass} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     </div> */}
  
    <div class="section-title">
      <h2 style={{color:'#ac00ac',padding:"20px",marginBottom:"0px",display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
      🎉 SPECIAL OFFER FOR ABOVE MENTIONED CLASS 🎉</h2>
    </div>
   <span className='textFontSize' style={{color:'white'}}>
IF YOU ARE IN  A GROUP OF 2 OR MORE.... YOU GET RS 100/- OFF ON ONLINE CLASS FEES AND RS 200/- OFF ON OFFLINE CLASS FEES...

   </span>
    <div class="section-title">
      <h2 style={{color:'black',padding:"20px",marginBottom:"0px"}}><span style={{color:"#ac00ac", fontFamily: 'Algerian, cursive'}}>Pallavi's</span> <span style={{color:"#fb28a4"}}>Delicious Treats</span> </h2>
    </div>

    <div class="row content ">
      <div class="col-lg-12">
        <p className='textFontSize' style={{textAlign:"justify",color:'white'}}>
        We, @Pallavi's Delicious Treats serve all the cake lovers including health conscious people with freshly baked eggless cakes and allied products of regular and premium flavours to make their special day a memorable one.


        </p>
        <p className='textFontSize' style={{textAlign:"justify",color:'white'}}>
        The pillars of our business are values like Trust, Hardwork, Love , Credibility.


        </p>
      
      </div>
    
   

      
    </div>

  </div>
</section>

<section style={{paddingTop:"1px"}}>

</section>
      <section id="cta" class="cta" >
      <div class="container" data-aos="zoom-in" style={{fontSize:"25px"}}>

        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
          
            <h3 style={{color:'white'}}>Reach me out to order cake or learn baking..
            </h3>
           
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" style={{cursor:'pointer',color:'white'}} onClick={()=>navigate("/contact")}>Contact Pallavi</a>
          </div>
        </div>
       

      </div>
    </section>






<section id="services" class="services">

      <div class="container" data-aos="fade-up">

        <div class="section-title" style={{marginBottom:"20px"}}>
          <h2 style={{color:'#fb28a4',paddingBottom:"5px"}}>Our Classes</h2>
          <p style={{fontSize:"22px",color:'white'}}>
          Welcome on board..If you are someone who are passionate about baking, want to learn from scratch, 
start your own business, you are at the right place at the right time. We @PALLAVI's Delicious Treats 
conduct cake workshops offline as well as online. All workshops are 100 percent eggless and hands on
practicals are taught. To enroll for any of the classes or for any enquiry do reach us at 
pallavisdelicioustreats@gmail.com
          </p>
        </div>
        <div class="row">
        <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("spongeclass")}>
              <div className="course-card">
              <img src={sponge} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
    <span style={{color:"#fb28a4"}}>Sponge</span> Class</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>navigate("/livecourses")}>View More</button> */}
 
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("cookieclass")}>
              <div className="course-card">
              <img src={cookies} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:'white'}}>
   <span style={{color:"#fb28a4"}}>Cookies</span> Class</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToClassDetails("/dnaengineering")}>View More</button> */}
 
</div>
              
                </a>             
           </div>
<div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("softcakeclass")}>
              <div className="course-card">
              <img src={softcakes} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   <span style={{color:"#fb28a4"}}>Tea time soft cakes </span>class</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToClassDetails("/onlinecourses")}>View More</button> */}
 
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("cupcakeclass")}>
              <div className="course-card">
              <img src={cupcakes} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   <span style={{color:"#fb28a4"}}>Cupcakes </span>class</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToClassDetails("/onlinecourses")}>View More</button> */}
 
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("beginnercakeclass")}>
              <div className="course-card">
              <img src={beginnercakeclass} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   <span style={{color:"#fb28a4"}}>Beginner's cake </span>class
</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToClassDetails("/onlinecourses")}>View More</button> */}
 
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("basicdesigner")}>
              <div className="course-card">
              <img src={basicdesignercakeclass} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   <span style={{color:"#fb28a4"}}>Basic designer cake </span> class
</h3>
     
   
</div>
              
                </a>             
           </div>
           <div class="col-xl-4 col-md-6 d-flex align-items-stretch" 
style={{marginBottom:"20px"}} data-aos="zoom-in" data-aos-delay="100">
              <a style={{cursor:"pointer"}} onClick={()=>goToClassDetails("advancedesigner")}>
              <div className="course-card">
              <img src={advancedesigningcakeclass} className="course-image" alt="Course Thumbnail" />

   <h3 className="course-title" style={{fontSize:"20px",color:"white"}}>
   <span style={{color:"#fb28a4"}}>Advance designer cake</span> class
</h3>
     
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToCourseDetails(courseInfo)}>Enroll</button> */}
      {/* <button className="btn btn-primary enroll-button" onClick={()=>goToClassDetails("/onlinecourses")}>View More</button> */}
 
</div>
              
                </a>             
           </div>

             
           
        </div>

       
     
      </div>
    
      </section>
      <section id="clients" class="clients">

<SuccessVideoSection 
        data={[]} 
         for_course={"home_page"}
         caption={"Testimonials"}
         justifyContent={"left"}
         />
 
</section>
      <section id="clients" class="clients" style={{marginBottom:"50px"}}>
    
     

   
    </section>
  
   
</main>
            </>
        )
    }
  return (
  <WebTemplate>
    {HomeScreen()}
  </WebTemplate>
  )
}

export default Home