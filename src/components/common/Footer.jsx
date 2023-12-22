import React from 'react'
import "./Header.css";

const Footer = () => {
  return (
    <>
      <section className='footer'> 
        <div>
          <label>Powered By</label>
          <p>Myclassboard</p>
          
          </div>
        <div>
          <label>NEED HELP</label>
          <p id="box1"> Write To Us</p>
          
        </div>
        <div>
          <label>Call Us</label>
          <p>(+91)7353950600 <br></br>
          Mon-Fri 9.30AM To 4.30PM</p>
        </div>
        <div>
          <label>Email Us</label>
          <p>support@myclassboard.in</p>
        </div>
        <div>
          <label>Privacy Policy  |  Terms and Condition</label>
          <p>Copyrights@Myclassboard.com,<br></br>All rights reserved</p>
        </div>
      </section>
    </>
  )
}

export default Footer;