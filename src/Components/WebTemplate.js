import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import Footer from './Footer'

function WebTemplate({children}) {
  return (
    <>
     {/* <body 
   class="toggle-sidebar-btn d-flex flex-column min-vh-100"> */}
<HeaderNavbar/>
<div id="herobackground">
{children}

</div>
{/* </body> */}
<Footer id="herobackground"/>

    </>
  )
}

export default WebTemplate