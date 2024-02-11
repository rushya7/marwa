import React,{useEffect,useRef,useState} from 'react'
import WebTemplate from '../Components/WebTemplate'
import { Link,useNavigate,useSearchParams  } from 'react-router-dom';

import { useGetAllTestimonialsQuery } from '../Services/modules/testimonials';
import SuccessVideoSection from '../Components/SuccessVideosSection';
//import homeBackgroundVideo from '../assets/videos/course_one.mp4'; // Import the video file

function ClassDetails() {
  const navigate=useNavigate()

    const [searchParams] = useSearchParams();
    let class_name=searchParams.get('classname')
   
  const{data:testimonialsData=[],isSuccess:isTestimonialsSuccess,isLoading:isTestimonialsLoading,error:isTestimonialsError,refetch}=useGetAllTestimonialsQuery()
  const[allTestimonials,setAllTestimonials]=useState([])
 
  useEffect(()=>{
    //refetch()
    console.log("className",class_name)
    if(class_name=="" || class_name==null)
    {
        console.log("In if")
        navigate({
            pathname: "/",
           
          });
    }
  },[])
 
  const spongeclass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'White sponge',
      
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Chocolate sponge',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',
      title: 'Red velvet sponge',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      fontSize:"5px",
      title: 'Pistachio sponge',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Sponge from premix',
       
      }
  ];
  const cookieClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Butter cookies',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Ginger cookies',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Til cookies',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      fontSize:"5px",
      title: 'Chocolate cookies',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Red velvet cookies',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown

        title: 'Pista cookies',
       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink

        title: 'Oats cookies',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown

        title: 'Shrewsberry cookies',       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink

        title: 'Nankatai biscuit',       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
        title: 'Melting moments',       
      }
  ];
  const softCakesClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Parsi Mawa cake',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Buttery soft cake',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Hot milk cake',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      fontSize:"5px",
      title: 'Pound cake',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Classic carrot cake',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
        title: 'Apple walnut cake',
       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Lemon poppy seed cake',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
        title: 'Rawa cake',       
      }
     
  ];
  const cupCakeClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Vanilla cupcakes with whipped cream frosting ',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Chocolate cupcakes with Dutch cream frosting ',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Red velvet cupcakes with  cheese cream frosting',
     
    }
  ];
  const beginnerCakeClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Learn Basic Sponge from scratch',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Chocolate cake with ganache making',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Pineapple Simple design cake',
     
    }
  ];
  const basicDesignerClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      title: 'Learn Sponge from scratch',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Chocolate cake with ganache making',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
      fontSize:"5px",    
      title: 'Red velvet cake with cheese cream',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
   //   fontSize:"5px",
      title: 'Glass / Marble effect',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink
        title: 'Glaze effect',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown

        title: 'Fault line',
       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink


        title: 'Doll cake',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown

        title: 'Shimmer effect',       
      }
     
  ];
  const advanceDesignerClass = [
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink

      title: 'Learn Sponge from scratch',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown
      title: 'Golden / Silver effect',
    
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink

      title: 'Gel carving',
     
    },
    {
      gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown

      fontSize:"5px",
      title: 'Artificial geode',
     
    },
    {
      gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink

        title: 'Origami',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown


        title: 'Criss cross cake',
       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink


        title: 'Texture effect',
       
      },
      {
        gradient: 'linear-gradient(to right, #FFD700, #800080)',//brown


        title: 'Frame cake',       
      },
      {
        gradient: 'linear-gradient(to right, #FF66B2, #8A2BE2)',//pink


        title: 'Painting cake',
       
      },
     
  ];
  
 
    const ClassOneScreen=()=>{  
    
        return(
            <>
          
              <main id="main">
              <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row" style={{textAlign:'center',marginTop:"80px"}}>
  
    <div class="col-lg-12 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
    <h1 style={{fontSize:"30px"}}>
        {
            class_name=="spongeclass"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Sponge Class</span> 
                </>
            ):
            class_name=="cookieclass"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Cookies Class</span> 
                </>
            ):
            class_name=="softcakeclass"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Tea time soft cakes class</span> 
                </>
            ): class_name=="cupcakeclass"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Cupcakes class</span> 
                </>
            ): class_name=="beginnercakeclass"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Beginner's cake class</span> 
                </>
            ):
            class_name=="basicdesigner"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Basic designer cake class</span> 
                </>
            ):
            class_name=="advancedesigner"?(
                <>
                Welcome to <span style={{color:'rgb(251, 40, 164)'}}>Advance designer cake class</span> 
                </>
            ):""
        }
       
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
      <h2 style={{color:'white',marginBottom:'5px',fontSize:'25px'}}>About The Course</h2>
      <h4 style={{color:'white'}}>50+ Students and continues..</h4>
    </div>
    {
        class_name==="spongeclass"?
         <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
     Hii everyone, welcome to the sponge class. In this class you will learn to make 5 different types of sponges 
all made from scratch. It includes all information regarding how to measure your ingredients, how to make
a perfect cake batter, how to set the oven temperature, also how to bake your cake in a pressure cooker etc.. 
So what are you waiting for... Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
    </p>:
    class_name==="cookieclass"?
    <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
Hii everyone, welcome to the cookies class. In this class you will learn 8 different types of cookies all made 
from scratch. Everything is taught practically. All the details regarding types of ingredients used, how to 
measure ingredients accurately, how to make whichever flavour cookie you wish to prepare, setting oven 
temerature, etc..So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
    </p>:
    class_name==="beginnercakeclass"?
    <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>

Hii everyone, Welcome to the Beginners class. It is a completely hands on class. 
In this class you will learn how to make a perfect sponge from scratch, how to use different flavours 
to make tasty cakes, how to whip cream with perfect consistency, how to layer your cake, how to give
finishing to the cake, different ways in which we can decorate our cake, measurement of the sponge to be 
prepared for one kg cake, how to make chocolate ganache, artifical dripping and many more details...
Isn't it mind blowing.. etc..So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
      </p>:
       class_name==="basicdesigner"?
       <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
  
Hii everyone, Welcome to the Basic Designer Cake class. It is a completely hands on class. 
In this class you will learn how to make a perfect sponge from scratch, how to use different flavours 
to make tasty cakes, how to whip cream with perfect consistency, how to give layering and finishing to your cake, how to give
how to make chocolate ganache, artifical dripping, and many more details...
You will learn Red velvet cake with cheese cream frosting, Glass/ Marble effect cake, Fault line cake,
Doll cake, Shimmer effect..
Isn't it soo many things to learn...So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
         </p>:
          class_name==="advancedesigner"?
          <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
      Hii everyone, Welcome to the Advanced Designer Cake class. It is a completely hands on class. 
In this class you will learn how to make a perfect sponge from scratch, how to use different flavours to make
tasty cakes, how to make chocolate ganache, how to give layering and finishing to your cake,
natural and artifical dripping, and many more details...
You will learn how to give Golden / Silver effect to the cake, Gel carving cake, Origami cake, Texture cake,
Artificial Geode cake, Frame cake, Criss cross cake, Painting cake...
Isn't it so exciting to learn the art of making these lovely cakes..
So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
            </p>:
              class_name==="softcakeclass"?
              <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
          Hii everyone, Welcome to the Tea time Soft Cakes class. It is a completely hands on class. In this class you will
learn 8 different types of soft cakes all made from scratch. How can you give flavour of your choice to the cake,
how to sell the cakes, how to price the cake etc.. 
Are you not excited to learn these yummy cakes..
So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
                </p>:
                 class_name==="cupcakeclass"?
                 <p style={{fontSize:"23px",textAlign:"justify",color:'white'}}>
           Hii everyone, Welcome to the  CupCakes class. It is a completely hands on class. In this class you will
learn how to make 3 different types of cupcakes all made from scratch. Also cheese cream and buttercream 
frostings are taught. You can also make cupcakes of any flavour of your own choice. 
So what are you waiting for..Just reach out us on  <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>.
                   </p>:""

    }

</div>
        </div>
        <div className='row'>
        <div class="section-title">
      <h2 style={{color:'black',marginBottom:'1px',fontSize:'25px',color:'white'}}>
       What You Will Learn</h2>
     
    </div>
        <div className="card-container">
      {class_name=="spongeclass"?
      spongeclass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
          {/* <p className="card-description">{color.description}</p> */}
        </div>
      )):
      class_name=="cookieclass"?
      cookieClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):
      class_name=="softcakeclass"?
      softCakesClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):
      class_name=="cupcakeclass"?
      cupCakeClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):
      class_name=="beginnercakeclass"?
      beginnerCakeClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):
      class_name=="basicdesigner"?
      basicDesignerClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient,padding:'1px' }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):
      class_name=="advancedesigner"?
      advanceDesignerClass.map((color, index) => (
        <div className="card" key={index} style={{ background: color.gradient }}>
          <h2 className="card-title">{color.title}</h2>
         
        </div>
      )):""
      }
    </div>
        <div class="container" style={{marginTop:"20px"}}>
        <div class="section-title">
      <h2 style={{color:'black',marginBottom:'1px',fontSize:'25px',color:'white'}}>
       Frequently Asked Questions</h2>
     
    </div>
       {class_name=="spongeclass"?
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
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>

      </div>:
      class_name=="cookieclass"?
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
         At what temperature should we bake the cookies? 
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse hide"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
            <strong>The temperature varies from 160 to 180 degrees depending on the company and capacity of your OTG</strong><p/> 
            
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
          For how many days can we store cookies?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
            <strong>The cookies can be stored for 10-15 days in an air tight container at room temperature.</strong><p/>
           
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
       Can we use wheat instead of maida for making cookies?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
            <strong>Yes, you can definitely use wheat instead of maida to make cookies.</strong><p/>
           

          </div>
        </div>
        
      </div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>

    </div>:
     class_name=="basicdesigner"?
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
        How much watt beater should we use to beat whipping cream?
         </button>
       </h2>
       <div
         id="collapseOne"
         className="accordion-collapse collapse hide"
         aria-labelledby="headingOne"
         data-bs-parent="#accordionExample"
       >
         <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
           <strong>Beater should be atleast of 400 watts.</strong><p/> 
           
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
        Fow how many days we can store the sponge made from scratch?
         </button>
       </h2>
       <div
         id="collapseTwo"
         className="accordion-collapse collapse"
         aria-labelledby="headingTwo"
         data-bs-parent="#accordionExample"
       >
         <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
           <strong>The sponge made from scratch can be stored for 1 day.</strong><p/>
          
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
     What is the tin size for 1 kg cake?
         </button>
       </h2>
       <div
         id="collapseFour"
         className="accordion-collapse collapse"
         aria-labelledby="headingFour"
         data-bs-parent="#accordionExample"
       >
         <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
           <strong>6 inches</strong><p/>
          

         </div>
       </div>
       
     </div>
     <div className="accordion-item">
       <h2 className="accordion-header" id="headingFive">
         <button
           className="accordion-button collapsed"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#collapseFive"
           aria-expanded="false"
           aria-controls="collapseFive"
           style={{fontSize:"20px"}}
         >
    Which color should we use to colour the whipping cream?
         </button>
       </h2>
       <div
         id="collapseFive"
         className="accordion-collapse collapse"
         aria-labelledby="headingFive"
         data-bs-parent="#accordionExample"
       >
         <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
           <strong>Gel colors</strong><p/>
          

         </div>
       </div>
       
     </div>
     <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>
   </div>:
    class_name=="softcakeclass"?
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
       Are these cakes eggless?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse hide"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Yes, all these recipes are eggless.</strong><p/> 
          
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
       Can we make any flavour of cake using the same recipes?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Yes, definitely. You will be taught to give variations to your cakes using these recipes.</strong><p/>
         
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
    For how long can we store these cakes?
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>We can store these cakes for 7 days in an air tight container in the refrigerator.</strong><p/>
         

        </div>
      </div>
      
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
          style={{fontSize:"20px"}}
        >
   Can we cream these cakes?
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Sure, you can even cream these cakes.</strong><p/>
         

        </div>
      </div>
      
    </div>
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>
  </div>:
    class_name=="cupcakeclass"?
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
       Is the recipe from scratch?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse hide"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Yes, all the recipes are from scratch.</strong><p/> 
          
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
       Do we learn how to make frosting?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Yes, everything regarding frosting is covered in the class.</strong><p/>
         
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
    For how many days can we store cupcakes?
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Cupcakes can be stored for 7 days in an air tight container at room temperature.</strong><p/>
         

        </div>
      </div>
      
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
          style={{fontSize:"20px"}}
        >
   Can we make any flavour of cupcakes?
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
          <strong>Yes, sure. You will be taught how to give variations to make flavour of your choice.</strong><p/>
         

        </div>
      </div>
      
    </div>
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>
  </div>:
   class_name=="beginnercakeclass"?
   <div className="accordion" id="accordionExample">
   <div className="accordion-item">
     <h2 className="accordion-header" id="headingOne">
       <button
         className="accordion-button "
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapseOne"
         aria-expanded="true"
         aria-controls="collapseOne"
         style={{fontSize:"20px"}}
       >
        Should we have any knowledge regarding baking?
       </button>
     </h2>
     <div
       id="collapseOne"
       className="accordion-collapse collapse"
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
     >
       <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
         <strong>
         No need to have any prior knowledge of baking...A fresher can also enroll for any of the classes</strong><p/>
         
       </div>
     </div>
     
   </div>
   <div className="accordion-item">
     <h2 className="accordion-header"  id="headingTwo">
       <button
         className="accordion-button collapsed"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapseTwo"
         aria-expanded="false"
         aria-controls="collapseTwo"
         style={{fontSize:"20px"}}
       >
      How much watt beater should we use to beat whipping cream?
       </button>
     </h2>
     <div
       id="collapseTwo"
       className="accordion-collapse collapse hide"
       aria-labelledby="headingTwo"
       data-bs-parent="#accordionExample"
     >
       <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
         <strong>Beater should be atleast of 400 watts.</strong><p/> 
         
       </div>
     </div>
   </div>
   <div className="accordion-item">
     <h2 className="accordion-header" id="headingThree">
       <button
         className="accordion-button collapsed"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapseThree"
         aria-expanded="false"
         aria-controls="collapseThree"
         style={{fontSize:"20px"}}
       >
      For how many days we can store the sponge made from scratch?
       </button>
     </h2>
     <div
       id="collapseThree"
       className="accordion-collapse collapse"
       aria-labelledby="headingThree"
       data-bs-parent="#accordionExample"
     >
       <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
         <strong>The sponge made from scratch can be stored for 1 day.</strong><p/>
        
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
      What is the tin size for 1 kg cake?
       </button>
     </h2>
     <div
       id="collapseFour"
       className="accordion-collapse collapse"
       aria-labelledby="headingFour"
       data-bs-parent="#accordionExample"
     >
       <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
         <strong>The sponge made from scratch can be stored for 1 day.</strong><p/>
        
       </div>
     </div>
   </div>
   <div className="accordion-item">
     <h2 className="accordion-header" id="headingFive">
       <button
         className="accordion-button collapsed"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapseFive"
         aria-expanded="false"
         aria-controls="collapseFive"
         style={{fontSize:"20px"}}
       >
  Which brand colours should we use in cakes?
       </button>
     </h2>
     <div
       id="collapseFive"
       className="accordion-collapse collapse"
       aria-labelledby="headingFive"
       data-bs-parent="#accordionExample"
     >
       <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
         <strong>Magic colours, Colormist, Bakersville.</strong><p/>
        

       </div>
     </div>
     
   </div>
   <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{fontSize:"20px"}}
            >
              Can I have notes and certificate?
          
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
              <strong>
                Yes. Notes and certificate will be provided from us. 
                </strong><p/>
             

            </div>
          </div>
          
        </div>

 </div>:
  class_name=="advancedesigner"?
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={{fontSize:"20px"}}
      >
       Should we have any knowledge regarding baking?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
        <strong>
        No need to have any prior knowledge of baking...A fresher can also enroll for any of the classes</strong><p/>
        
      </div>
    </div>
    
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header"  id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        style={{fontSize:"20px"}}
      >
    Which brand colours should we use in cakes?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse hide"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
        <strong>Magic colours, Colormist, Bakersville</strong><p/> 
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={{fontSize:"20px"}}
      >
     Which brand whipped cream can we use?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
        <strong>Tropolite premium, Riche's, Golden Mark.</strong><p/>
       
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
    Is shimmer effect and golden effect same?
      </button>
    </h2>
    <div
      id="collapseFour"
      className="accordion-collapse collapse"
      aria-labelledby="headingFour"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
        <strong>No. They both are different..</strong><p/>
       
      </div>
    </div>
  </div>
 
  <div className="accordion-item">
         <h2 className="accordion-header" id="headingSix">
           <button
             className="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseSix"
             aria-expanded="false"
             aria-controls="collapseSix"
             style={{fontSize:"20px"}}
           >
             Can I have notes and certificate?
         
           </button>
         </h2>
         <div
           id="collapseSix"
           className="accordion-collapse collapse"
           aria-labelledby="headingSix"
           data-bs-parent="#accordionExample"
         >
           <div className="accordion-body" style={{textAlign:'left',fontSize:"18px"}}>
             <strong>
               Yes. Notes and certificate will be provided from us. 
               </strong><p/>
            

           </div>
         </div>
         
       </div>

</div>:""
    }
  </div>
 
 
     
        </div>

      </div>
      <div class="fluid-container" style={{marginTop:"20px"}}>
      {!isTestimonialsLoading? 
    
        <SuccessVideoSection 
        data={!isTestimonialsLoading ? allTestimonials : []}
         for_course={class_name}
         caption={"Testimonials"}
         />:""}
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
    {ClassOneScreen()}
  </WebTemplate>
  )
}

export default ClassDetails