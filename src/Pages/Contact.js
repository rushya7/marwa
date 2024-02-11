import React, { useEffect, useState } from 'react'
import WebTemplate from '../Components/WebTemplate'


function Contact() {

  const ContactScreen=()=>{
    return(
    <>
      <main id="main">
      <section id="contact" class="contact" style={{marginTop:"50px"}}>
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 style={{color:"#fb28a4"}}>Contact Us</h2>
          <p style={{color:'white'}}>
          To place a cake / any other product order for any occasion or to enroll for any of the classes you can easily reach us on pallavisdelicioustreats@gmail.com or <span> </span>
        <a href="https://wa.me/7757999339" target='_blank' style={{color:'white'}}>
          <i class="bx bxl-whatsapp"></i>7757999339</a>
           
            </p>
         
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p> Srushti CHS, E wing, Flat no 1 New DP road, near Guruganesh Nagar, Kothrud, Pune 411038</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>pallavisdelicioustreats@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-whatsapp"></i>
                <h4>Whatsapp:</h4>
               
                <p>
                <a href="https://wa.me/7757999339" target='_blank' 
                >
                  91 7757999339
                  </a>

</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.382234746587!2d73.79531915088131!3d18.50197017140499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb5dc526e7d%3A0xa60bc5ff0d1c3c02!2sSrushti%20Co%20Op%20Housing%20Society!5e0!3m2!1sen!2sin!4v1703877688934!5m2!1sen!2sin"width="100%" height="290" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15274.527007052991!2d74.5980598!3d16.844615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12280dbc54155%3A0x46306832ec381ab0!2sDr.Sandeep%20Patil&#39;s%2C%20The%20DNA-Confidence!5e0!3m2!1sen!2sin!4v1697067890076!5m2!1sen!2sin" width="100%" height="290"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button></div>
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
    <WebTemplate>{ContactScreen()}</WebTemplate>
  )
}

export default Contact