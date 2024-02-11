import React,{useEffect,useState} from 'react'
//import '../assets/js/main.js'
import { Link, NavLink, useNavigate } from 'react-router-dom';
//import '../assets/css/style.css'
//import AOS from '../assets/vendor/aos/aos.js'
//import '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import GLightbox from '../assets/vendor/glightbox/js/glightbox.min.js'
// import Isotope from '../assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import Swiper from '../assets/vendor/swiper/swiper-bundle.min.js'
//import { Swiper, SwiperSlide } from "swiper/react";
import Waypoint from '../assets/vendor/waypoints/noframework.waypoints.js'
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from '../Store/UserData/index.js';
// import CartDrawer from './CartDrawer.js';
import Logo from '../assets/img/icons/cake.png';


function HeaderNavbar() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const cartItems = useSelector(state => state.bookCart);
  const cartItemsLength = useSelector(state => state.bookCart.length);
  const[total_cart_quantity,setTotalCartQuantity]=useState(0)

  const isLoggedin = useSelector(state => state.userData.user_data == null ?false: 
    state.userData.user_data.is_profile_complete==false? false : true);
    const userData = useSelector(state => state.userData.user_data);
  useEffect(() => { 
    (function() {
     
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }    
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)
    
      const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight
    
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
      }
    
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
    
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
    
     
    
      // window.addEventListener('load', () => {
      //   if (window.location.hash) {
      //     if (select(window.location.hash)) {
      //       scrollto(window.location.hash)
      //     }
      //   }
      // });
    
      // let preloader = select('#preloader');
      // if (preloader) {
      //   window.addEventListener('load', () => {
      //     preloader.remove()
      //   });
      // }
    
     
      // const glightbox = GLightbox({
      //   selector: '.glightbox'
      // });
    
    
      // let skilsContent = select('.skills-content');
      // if (skilsContent) {
      //   new Waypoint({
      //     element: skilsContent,
      //     offset: '80%',
      //     handler: function(direction) {
      //       let progress = select('.progress .progress-bar', true);
      //       progress.forEach((el) => {
      //         el.style.width = el.getAttribute('aria-valuenow') + '%'
      //       });
      //     }
      //   })
      // }
    
      // window.addEventListener('load', () => {
      //   let portfolioContainer = select('.portfolio-container');
      //   if (portfolioContainer) {
      //     let portfolioIsotope = new Isotope(portfolioContainer, {
      //       itemSelector: '.portfolio-item'
      //     });
    
      //     let portfolioFilters = select('#portfolio-flters li', true);
    
      //     on('click', '#portfolio-flters li', function(e) {
      //       e.preventDefault();
      //       portfolioFilters.forEach(function(el) {
      //         el.classList.remove('filter-active');
      //       });
      //       this.classList.add('filter-active');
    
      //       portfolioIsotope.arrange({
      //         filter: this.getAttribute('data-filter')
      //       });
           
      //     }, true);
      //   }
    
      // });
    
     
      // const portfolioLightbox = GLightbox({
      //   selector: '.portfolio-lightbox'
      // });
    
     
      // window.addEventListener('load', () => {      
      // });
    
    })()
    window.scrollTo(0, 0)
  }, []);
  useEffect(()=>{
    if(cartItems.length>0)
    {
    cartItems.map((data,index)=>{
     // console.log("Use effect triggered asdad",data)
      // let quantity=0
      // quantity+=data.quantity
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

      setTotalCartQuantity(totalQuantity)
    //  console.log("total_cart_quantity",total_cart_quantity)
    })
  }
  else
  {
    setTotalCartQuantity(0)
  }
   },[cartItems])
const logout=()=>{
dispatch(clearUserData())
}
const [toggleOpen,setToggleOpen]=useState(false)
const [showDropdown,setshowDropdown]=useState(true)
const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

const handleCartClick = () => {
  setIsDrawerOpen(true);
};
const handleCloseDrawer = () => {
  setIsDrawerOpen(false);
};
const openDropdown=()=>{
 
  var y = document.getElementById("dropdown");

  if(showDropdown)
  {
    y.classList.add('dropdown-active')
  setshowDropdown(false)

  }
  else
  {
    y.classList.remove('dropdown-active')
    setshowDropdown(true)
  }
 
}
const openDropdownLogin=()=>{
 
  var y = document.getElementById("dropdownLogin");

  if(showDropdown)
  {
    y.classList.add('dropdown-active')
  setshowDropdown(false)

  }
  else
  {
    y.classList.remove('dropdown-active')
    setshowDropdown(true)
  }
 
}
 
    const toggleMobile=()=>{
     
      var x = document.getElementById("navbar");
      var y = document.getElementById("mobile-nav-toggle");
      
      if(toggleOpen==true)
      {
        x.classList.remove('navbar-mobile')
        x.classList.add('navbar')
        y.classList.remove('bi-x')
        y.classList.add('bi-list')
        setToggleOpen(false)
      }
      if(toggleOpen==false)
      {
        x.classList.remove('navbar')
        x.classList.add('navbar-mobile')
        y.classList.remove('bi-list')
        y.classList.add('bi-x')
        setToggleOpen(true)
      }
    
    }
    const goToClassDetails=(param)=>{
      //alert("In class details")
      //console.log("URL",url)
      navigate({
        pathname: "/classdetails",
        search: `?classname=${param}`,
      });
     }
  return (
    <>
     {/* <CartDrawer 
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                total_quantity={total_cart_quantity}
                cartItems={cartItems}/> */}
         <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto">    
      {/* <img src={Logo} alt="TED Talk"/> */}

      <NavLink 
    to='/'    
    >
      <span style={{ color: "#ac00ac", fontFamily: 'Algerian, cursive' }}>PALLAVI'S</span>
    <span style={{color:"#fb28a4", fontFamily: 'Calibri, sans-serif'}}> DELICIOUS TREATS</span>
        </NavLink>
        </h1>
     
      <nav id="navbar" class="navbar">
        <ul>
        <li>
          
          <NavLink 
       to='/'
       className={({ isActive, isPending }) =>
       isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
   
     }
       >
                 HOME
                 </NavLink>
                
                 </li>
        <li class="dropdown dropdown-active" >
          <a href="#" onClick={()=>openDropdown()}>
         
            <span>Classes</span> <i class="bi bi-chevron-down"></i></a>
            <ul id="dropdown">
              <li className='nav-link'>
              <a 
    //to='/classdetails'  
    onClick={()=>goToClassDetails("spongeclass")} 
    style={{cursor:'pointer'}} 
    >
                Sponge Class
                 </a>
            
                </li>
            
             
             
                <li className='nav-link'>
                <a 
    //to='/classdetails'  
    onClick={()=>goToClassDetails("cookieclass")} 
    style={{cursor:'pointer'}} 
    >
               Cookies Class
                  </a>
                </li>
                <li>
                <a 
    //to='/classdetails'  
    onClick={()=>goToClassDetails("softcakeclass")} 
    style={{cursor:'pointer'}} 
    >
                {/* DNA-Engineering */}
                Tea time soft cakes class

                </a>
                </li>
                <li>
                <a 
    //to='/classdetails'  
    onClick={()=>goToClassDetails("cupcakeclass")} 
    style={{cursor:'pointer'}} 
    >
                {/* DNA-Engineering */}
                Cupcakes class

                </a>
                </li>
                <li>
                <a 
   
    onClick={()=>goToClassDetails("beginnercakeclass")} 
    style={{cursor:'pointer'}} 
    >
                {/* DNA-Engineering */}
                Beginner's Cake Class

                </a>
                </li>
                <li>
                <a 
   
    onClick={()=>goToClassDetails("basicdesigner")} 
    style={{cursor:'pointer'}} 
    >
                {/* DNA-Engineering */}
                Basic designer cake class

                </a>
                </li>
                <li>
                <a 
   
    onClick={()=>goToClassDetails("advancedesigner")} 
    style={{cursor:'pointer'}} 
    >
                {/* DNA-Engineering */}
                Advance designer cake class

                </a>
                </li>
            </ul>
          </li>
          
          <li>
            <NavLink 
    to='/about'
    className={({ isActive, isPending }) =>
    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"

  }
    >
              About
              </NavLink>
             
              </li>
        
        
            <li>
              <NavLink 
    to='/videogallery'
    className={({ isActive, isPending }) =>
    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"

  }
    >
            Video Gallery
            </NavLink>
            </li>
            <li>
              <NavLink 
    to='/photogallery'
    className={({ isActive, isPending }) =>
    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"

  }
    >
            Photo Gallery
            </NavLink>
            </li>

          
            <NavLink 
    to='/contact'
    className={({ isActive, isPending }) =>
    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"

  }
    >
            Contact
            </NavLink>
          
               
        </ul>
        <i id="mobile-nav-toggle" class="bi bi-list mobile-nav-toggle"
      onClick={()=>toggleMobile()}
        ></i>
         {/* <i class="bi bi-list mobile-nav-toggle"
     
        ></i> */}
      </nav>

    </div>
  </header>
    </>
  )
}

export default HeaderNavbar