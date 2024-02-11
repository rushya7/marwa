import React,{useEffect,useRef,useState} from 'react'
import WebTemplate from '../Components/WebTemplate'
import { Link,useNavigate,useSearchParams  } from 'react-router-dom';

import SuccessVideoSection from '../Components/SuccessVideosSection';
//import homeBackgroundVideo from '../assets/videos/course_one.mp4'; // Import the video file

function About() {
  const navigate=useNavigate()

  const learn = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Cakes',
      
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Cookies',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Cupcakes',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      fontSize:"5px",
      title: 'Chocolates',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Brownies',
       
      }
  ];
    const aboutScreen=()=>{  
    
        return(
            <>
          
              <main id="main">
              <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row" style={{textAlign:'center',marginTop:"80px"}}>
  
    <div class="col-lg-12 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
    <h1 style={{fontSize:"30px"}}>
       
               About <span style={{color:'rgb(172, 0, 172)', fontFamily: 'Algerian, cursive'}}>Pallavi's </span> 
               <span style={{color:'rgb(251, 40, 164)'}}>Delicious Treats</span>
               
       
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
      <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'5px',fontSize:'25px'}}>Who we are</h2>
      
    </div>
    <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
    We, @Pallavi's Delicious Treats serve all the cake lovers including health conscious people with freshly baked eggless cakes and allied products of regular and premium flavours to make their special day a memorable one.
<p>The pillars of our business are values like Trust, Hardwork, Love , Credibility.
</p>
<div class="section-title" style={{color:'rgb(251, 40, 164)'}}>My Story
</div>
<p>
I am a Housewife turned into a Home Baker. As any woman, who aspire to achieve her goals in life, so was I. I was a post graduate student working in Cipla. After marriage I shifted to Pune and couldn't contiue my job due to household responsibilities. After a huge gap of around 12 odd years.. I decided to do something which will keep me engaged mentally and even I can be financially independent. During lockdown I saw many videos and started making cakes as my daughter loved them. After few months I took my hobby of baking as a passion and did a professional baking course. This boosted my confidence and finally I started my business as a Home Baker in July 2022 by taking cake orders. Eventually I also started conducting cake workshops. 

</p>
<p>
My vision is to guide anyone who is interested in baking or passionate about starting their own small business as a Home Baker, in such a way that they can be financially independent and live an abundant life.

</p>

    </p>

</div>
        </div>
        <div className='row'>
        <div class="section-title">
      <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'1px',fontSize:'25px'}}>
       What We Serve</h2>
     
    </div>
        <div className="card-container">
     
     { learn.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
        
        </div>
     )
     )
    }
     
    </div>
        <div class="container" style={{marginTop:"20px"}}>
        <div class="section-title">
      <h2 style={{color:'rgb(251, 40, 164)',marginBottom:'1px',fontSize:'25px'}}>
       Frequently Asked Questions</h2>
     
    </div>
      
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
              style={{fontSize:"20px"}}
            >
             Should we have any knowledge regarding baking?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
              No need to have any prior knowledge of baking...A fresher can also enroll for any of the classes</strong><p/>
              
            </div>
          </div>
          
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header"  id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={{fontSize:"20px"}}
            >
            Are the recipes eggless?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse hide"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>Yes, all the recipes are eggless.</strong><p/> 
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{fontSize:"20px"}}
            >
             Can we make different sponges using the same recipe?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>Definitely, you can make various sponges using the same recipe.</strong><p/>
             
            </div>
          </div>
        </div>
      
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{fontSize:"20px"}}
            >
           For how many days can we store the sponge?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>The sponge made from scratch can be stored for one day.</strong><p/>
             

            </div>
          </div>
          
        </div>

      </div>
    
    
  </div>
 
 
     
        </div>

      </div>
      <div class="fluid-container" style={{marginTop:"20px"}}>
     
        <SuccessVideoSection 
        data={[]}
         for_course={"overall"}
         caption={"Testimonials"}
         />
      </div>
    

    </section>
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">

       
        <div class="row">
         
        </div>

      </div>
    </section>

</main>
            </>
        )
    }
  return (
  <WebTemplate>
    {aboutScreen()}
  </WebTemplate>
  )
}

export default About