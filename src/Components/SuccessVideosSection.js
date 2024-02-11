import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/SuccessVideos.css';

const SuccessVideoSection = ({data,for_course,caption,justifyContent}) => {
  const testimonialRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (testimonialRef.current) {
      setCardWidth(testimonialRef.current.querySelector('.successVideos-card').offsetWidth);
    }
  }, [data]);

  const scrollLeft = () => {
    if (testimonialRef.current && cardWidth) {
      const containerWidth = testimonialRef.current.offsetWidth;

      if (scrollPosition === 0) {
        setScrollPosition(testimonialRef.current.scrollWidth - containerWidth);
      } else {
        setScrollPosition((prevPosition) => Math.max(prevPosition - cardWidth, 0));
      }
    }
  };

  const scrollRight = () => {
    if (testimonialRef.current && cardWidth) {
      const containerWidth = testimonialRef.current.offsetWidth;

      if (scrollPosition >= testimonialRef.current.scrollWidth - containerWidth) {
        setScrollPosition(0);
      } else {
        setScrollPosition((prevPosition) => Math.min(prevPosition + cardWidth, testimonialRef.current.scrollWidth - containerWidth));
      }
    }
  };

  return (
    
     <section className="successVideos-section" >
     {/* <section> */}

   { for_course==="spongeclass"?
        <div className='row d-flex justify-content-center' >
         
            <div className='col-md-12 align-self-center'>
            <div className="successVideos-content">
            <div class="section-title">
      <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
        Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
      <h4 style={{color:'white'}}>
        <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
        <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
        </a>
        </h4>
    </div>
        <div className="successVideos-carousel">
          <div
            className="successVideos-cards-container"
            ref={testimonialRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
         
        <div className="successVideos-card">
               
       <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
       // src="https://www.youtube.com/embed/HT_BSpavYPM"
      
       src={`https://www.youtube.com/embed/Sjn_clMcCqU?si=Kg5KgRfEMlwmc-03`}

         loading="lazy"></iframe>

              </div>
              <div className="successVideos-card">
               
               <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
               // src="https://www.youtube.com/embed/HT_BSpavYPM"
              
               src={`https://www.youtube.com/embed/c-a_GE2xqT0?si=gJU9QFaHIJEg9Dl2`}
        
                 loading="lazy"></iframe>
        
                      </div>
                      <div className="successVideos-card">
               
               <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
               // src="https://www.youtube.com/embed/HT_BSpavYPM"
              
               src={`https://www.youtube.com/embed/bg73ETFRIgo?si=UXEWqLbUgPXz3N7k`}
        
                 loading="lazy"></iframe>
        
                      </div>
                     
           
          </div>
          <div className="successVideos-carousel-arrows">
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
            <i class="fa fa-arrow-left" ></i>
              {/* {'<'} */}

            </button>
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
            <i class="fa fa-arrow-right"></i>
              {/* {'>'} */}
            </button>
          </div>
        </div>
      </div>
            </div>
        </div>:
        for_course==="cookieclass"?
        <div className='row'>
         
            <div className='col-md-12 align-self-center'>
            <div className="successVideos-content">
            <div class="section-title">
      <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
        Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
      <h4 style={{color:'white'}}>
        <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
        <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
        </a>
        </h4>
    </div>
        <div className="successVideos-carousel">
          <div
            className="successVideos-cards-container"
            ref={testimonialRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {/* {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="successVideos-card">
               
       <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}} src="https://www.youtube.com/embed/HT_BSpavYPM" loading="lazy"></iframe>

              </div>

            ))} */}
        <div className="successVideos-card">
               
       <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
       // src="https://www.youtube.com/embed/HT_BSpavYPM"
      
       src={`https://www.youtube.com/embed/VCcCm6Vep0k?si=IVtFq2tTjMwRAJuA`}

         loading="lazy"></iframe>

              </div>
              <div className="successVideos-card">
               
               <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
               // src="https://www.youtube.com/embed/HT_BSpavYPM"
              
               src={`https://www.youtube.com/embed/LiwR-liepz8?si=WsjT3b55lrVE0amW`}
        
                 loading="lazy"></iframe>
        
                      </div>
                     
          </div>
          <div className="successVideos-carousel-arrows">
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
            <i class="fa fa-arrow-left" ></i>
              {/* {'<'} */}

            </button>
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
            <i class="fa fa-arrow-right"></i>
              {/* {'>'} */}
            </button>
          </div>
        </div>
      </div>
            </div>
        </div>
        :
        for_course==="basicdesigner"?
        <div className='row'>
         
            <div className='col-md-12 align-self-center'>
            <div className="successVideos-content">
            <div class="section-title">
      <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
        Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
      <h4 style={{color:'white'}}>
        <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
        <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
        </a>
        </h4>
    </div>
        <div className="successVideos-carousel">
          <div
            className="successVideos-cards-container"
            ref={testimonialRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
           
        <div className="successVideos-card">
               
       <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
      
       src={`https://www.youtube.com/embed/vm5ur2PGDYA?si=QnXTXaie18n25Rke`}

         loading="lazy"></iframe>

              </div>
              <div className="successVideos-card">
               
               <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
               // src="https://www.youtube.com/embed/HT_BSpavYPM"
              
               src={`https://www.youtube.com/embed/u62kCO3w0do?si=fFEgErjscXPao_nh`}
        
                 loading="lazy"></iframe>
        
                      </div>
                      <div className="successVideos-card">
               
               <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
               // src="https://www.youtube.com/embed/HT_BSpavYPM"
              
               src={`https://www.youtube.com/embed/R0QA6_9x9Bk?si=Irv4qDkOf5wnf7cX`}
        
                 loading="lazy"></iframe>
        
                      </div>
                     
          </div>
          <div className="successVideos-carousel-arrows">
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
            <i class="fa fa-arrow-left" ></i>
              {/* {'<'} */}

            </button>
            <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
            <i class="fa fa-arrow-right"></i>
              {/* {'>'} */}
            </button>
          </div>
        </div>
      </div>
            </div>
        </div>:
        for_course==="advancedesigner"?
        <div className='row'>
         
        <div className='col-md-12 align-self-center'>
        <div className="successVideos-content">
        <div class="section-title">
  <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
    Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
  <h4 style={{color:'white'}}>
    <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
    <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
    </a>
    </h4>
</div>
    <div className="successVideos-carousel">
      <div
        className="successVideos-cards-container"
        ref={testimonialRef}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
       
    <div className="successVideos-card">
           
   <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
  
   src={`https://www.youtube.com/embed/8MJOLj4r3Hg?si=8C88nloroLipdaUv`}

     loading="lazy"></iframe>

          </div>
          <div className="successVideos-card">
           
           <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
           // src="https://www.youtube.com/embed/HT_BSpavYPM"
          
           src={`https://www.youtube.com/embed/dL9YV9Y8rnU?si=0TbUwVFr01Fg8f0N`}
    
             loading="lazy"></iframe>
    
                  </div>
                  <div className="successVideos-card">
           
           <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
           // src="https://www.youtube.com/embed/HT_BSpavYPM"
          
           src={`https://www.youtube.com/embed/cd0RBEt0Leg?si=0fzgeADfQGCNv6a0`}
    
             loading="lazy"></iframe>
    
                  </div>
                 
      </div>
      <div className="successVideos-carousel-arrows">
        <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
        <i class="fa fa-arrow-left" ></i>
          {/* {'<'} */}

        </button>
        <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
        <i class="fa fa-arrow-right"></i>
          {/* {'>'} */}
        </button>
      </div>
    </div>
  </div>
        </div>
    </div>
        :
        for_course==="softcakeclass"?
        <div className='row'>
         
        <div className='col-md-12 align-self-center'>
        <div className="successVideos-content">
        <div class="section-title">
  <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
    Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
  <h4 style={{color:'white'}}>
    <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
    <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
    </a>
    </h4>
</div>
    <div className="successVideos-carousel">
      <div
        className="successVideos-cards-container"
        ref={testimonialRef}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
       
    <div className="successVideos-card">
           
   <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
  
   src={`https://www.youtube.com/embed/0OJGcW5SVyk?si=aE9KPVibOfiw8y7P`}

     loading="lazy"></iframe>

          </div>
          <div className="successVideos-card">
           
           <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
           // src="https://www.youtube.com/embed/HT_BSpavYPM"
          
           src={`https://www.youtube.com/embed/bg73ETFRIgo?si=bOh_MvUqVzAtC4ph`}
    
             loading="lazy"></iframe>
    
                  </div>
                  <div className="successVideos-card">
           
           <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
           // src="https://www.youtube.com/embed/HT_BSpavYPM"
          
           src={`https://www.youtube.com/embed/Sjn_clMcCqU?si=1fBakdi34IYVa8ru`}
    
             loading="lazy"></iframe>
    
                  </div>
                 
      </div>
      <div className="successVideos-carousel-arrows">
        <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
        <i class="fa fa-arrow-left" ></i>
          {/* {'<'} */}

        </button>
        <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
        <i class="fa fa-arrow-right"></i>
          {/* {'>'} */}
        </button>
      </div>
    </div>
  </div>
        </div>
    </div>:
     for_course==="cupcakeclass"?
     <div className='row'>
         
         <div className='col-md-12 align-self-center'>
         <div className="successVideos-content">
         <div class="section-title">
   <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
     Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
   <h4 style={{color:'white'}}>
     <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
     <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
     </a>
     </h4>
 </div>
     <div className="successVideos-carousel">
       <div
         className="successVideos-cards-container"
         ref={testimonialRef}
         style={{justifyContent:'center', transform: `translateX(-${scrollPosition}px)`}}
       >
        
  
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/0OJGcW5SVyk?si=h1u7IBigLWbNRwDc`}
     
              loading="lazy"></iframe>
     
                   </div>
                 
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/bg73ETFRIgo?si=rS4YBIVg3--ajPxJ`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/Sjn_clMcCqU?si=LeUt75x1owHy0uZH`}
     
              loading="lazy"></iframe>
     
                   </div>
                
       </div>
       <div className="successVideos-carousel-arrows">
         <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
         <i class="fa fa-arrow-left" ></i>
           {/* {'<'} */}

         </button>
         <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
         <i class="fa fa-arrow-right"></i>
           {/* {'>'} */}
         </button>
       </div>
     </div>
   </div>
         </div>
     </div>
 :
 for_course==="home_page"?
 <div className='row'>
     
     <div className='col-md-12 align-self-center'>
     <div className="successVideos-content">
     <div class="section-title">
<h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
 Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
<h4 style={{color:'white'}}>
 <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
 <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
 </a>
 </h4>
</div>
 <div className="successVideos-carousel">
   <div
     className="successVideos-cards-container"
     ref={testimonialRef}
     style={{justifyContent:'left', transform: `translateX(-${scrollPosition}px)`}}
   >
    <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/QWwPrtwMUDc?si=GFrE5AyLXrFnvlk9
        `}
 
          loading="lazy"></iframe>
 
               </div>
    <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/iuVDcEFqpLw?si=jU666PX9ruJWMhtj`}
 
          loading="lazy"></iframe>
 
               </div>
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/y60eMB1HhtI?si=6Fhf97UxoqbBspYj`}
 
          loading="lazy"></iframe>
 
               </div>
             
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/dmvkHAx8N-8?si=kWKTEAR90CCwB7cb`}
 
          loading="lazy"></iframe>
 
               </div>
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/8MJOLj4r3Hg?si=RzRYNwRos1oEEITu`}
 
          loading="lazy"></iframe>
 
               </div>
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/gfK3fxZXHSU?si=FgK2oqL376dG2Hv5`}
 
          loading="lazy"></iframe>
 
               </div>
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/fnaa_DHDrZU?si=p1ZY6gmUxlHy6prX`}
 
          loading="lazy"></iframe>
 
               </div>
               <div className="successVideos-card">
        
        <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
        // src="https://www.youtube.com/embed/HT_BSpavYPM"
       
        src={`https://www.youtube.com/embed/c-a_GE2xqT0?si=HRF0UfYlLVKMB7WK`}
 
          loading="lazy"></iframe>
 
               </div>
            
   </div>
   <div className="successVideos-carousel-arrows">
     <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
     <i class="fa fa-arrow-left" ></i>
       {/* {'<'} */}

     </button>
     <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
     <i class="fa fa-arrow-right"></i>
       {/* {'>'} */}
     </button>
   </div>
 </div>
</div>
     </div>
 </div>:
         <div className='row'>
         
         <div className='col-md-12 align-self-center'>
         <div className="successVideos-content">
         <div class="section-title">
   <h2 style={{color:'black',marginBottom:'5px',fontSize:'25px',color:'white'}}>
     Checkout <span style={{color:"#fb28a4"}}>My Youtube Videos</span></h2>
   <h4 style={{color:'white'}}>
     <a href="https://www.youtube.com/@pallavijoshi4639" style={{color:'white'}} target='_blank'>
     <span style={{color:"#fb28a4"}}> Click here to visit channel </span>
     </a>
     </h4>
 </div>
     <div className="successVideos-carousel">
       <div
         className="successVideos-cards-container"
         ref={testimonialRef}
         style={{justifyContent:'left', transform: `translateX(-${scrollPosition}px)`}}
       >
        
     <div className="successVideos-card">
            
    <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
    // src="https://www.youtube.com/embed/HT_BSpavYPM"
   
    src={`https://www.youtube.com/embed/dL9YV9Y8rnU?si=HtASX4vZo55mhuEP`}

      loading="lazy"></iframe>

           </div>
           <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/VCcCm6Vep0k?si=zGWVG7uzkpZMdp8N`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/0OJGcW5SVyk?si=h1u7IBigLWbNRwDc`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/R0QA6_9x9Bk?si=-VsGmOeEjkN_nQKh`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/bg73ETFRIgo?si=rS4YBIVg3--ajPxJ`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/Sjn_clMcCqU?si=LeUt75x1owHy0uZH`}
     
              loading="lazy"></iframe>
     
                   </div>
                   <div className="successVideos-card">
            
            <iframe className="responsive-iframeVideos"  style={{borderRadius:"12px"}}
            // src="https://www.youtube.com/embed/HT_BSpavYPM"
           
            src={`https://www.youtube.com/embed/vm5ur2PGDYA?si=MqsGmu8gaoz4Mawk`}
     
              loading="lazy"></iframe>
     
                   </div>

        
       </div>
       <div className="successVideos-carousel-arrows">
         <button className="successVideos-carousel-arrow" style={{color:'white',padding:"0px"}} onClick={scrollLeft}>
         <i class="fa fa-arrow-left" ></i>
           {/* {'<'} */}

         </button>
         <button className="successVideos-carousel-arrow" style={{color:'white',padding:"30px"}} onClick={scrollRight}>
         <i class="fa fa-arrow-right"></i>
           {/* {'>'} */}
         </button>
       </div>
     </div>
   </div>
         </div>
     </div>
        
        }
    
    
    </section>
  );
};

export default SuccessVideoSection;