import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from 'swiper'

function Footer() {
  const navigate=useNavigate()
  return (
    <div>
         <footer id="footer" >



<div class="footer-top" style={{backgroundColor:'black'}}>
  <div class="container">
    <div class="row">

      <div class="col-lg-6 col-md-6 footer-contact">
        <h3 style={{fontSize:"20px",color:'white'}}>
        <span style={{color:'#ac00ac', fontFamily: 'Algerian, cursive'}}> PALLAVI'S </span><span style={{color:'#fb28a4'}}>DELICIOUS TREATS</span></h3>
        <p style={{color:'white'}}>
        <strong style={{color:'#fb28a4'}}>Address: </strong>  
        Srushti CHS, E wing, Flat no 1 New DP road, near Guruganesh Nagar, Kothrud, Pune 411038 <br/>
        
          <strong style={{color:'#fb28a4'}}>Phone: </strong> 
          91 7757999339<br/>
          <strong style={{color:'#ac00ac'}}>Write Us On:</strong> pallavisdelicioustreats@gmail.com<br/>

          

        </p>
       
      </div>

   
    

      <div class="col-lg-6 col-md-6 footer-links">
        <h4 style={{color:'#fb28a4'}}>Our Social Networks</h4>
       
        <div class="social-links mt-3">
        <a href="https://www.youtube.com/@pallavijoshi4639" target='_blank' style={{color:'white',backgroundColor:'#fb28a4'}}><i class="bx bxl-youtube"></i></a>
        <a href="https://www.instagram.com/pallavisdelicioustreats/" target='_blank' style={{color:'white',backgroundColor:'#fb28a4'}}><i class="bx bxl-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100083358340304" target='_blank' style={{color:'white',backgroundColor:'#fb28a4'}}><i class="bx bxl-facebook"></i></a>
        <a href="https://wa.me/7757999339" target='_blank' style={{color:'white',backgroundColor:'#fb28a4'}}>
          <i class="bx bxl-whatsapp"></i></a>
          {/* <a href="https://www.facebook.com/drsandeeppatil" target='_blank' class="facebook"><i class="bx bxl-facebook"></i></a> */}
         
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container-fluid footer-bottom clearfix" 
style={{backgroundColor:'rgba(0,0,0,.32)'}}>
  <div class="copyright" style={{margin:'auto'}}>
    &copy; Copyright <strong><span style={{color:"#ac00ac", fontFamily: 'Algerian, cursive'}}>PALLAVI'S</span> <span style={{color:'#fb28a4'}}> DELICIOUS TREATS</span></strong>. 
    All Rights Reserved
  </div>
  {/* <div class="credits">
   
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div> */}
</div>
</footer>
{/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center" style={{backgroundColor:"#fb28a4"}}>
  <i class="bi bi-arrow-up-short"></i></a> */}

    </div>
  )
}

export default Footer