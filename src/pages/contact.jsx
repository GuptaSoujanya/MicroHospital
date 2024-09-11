import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function Contact() {
  return (
    <>
      <body className="sub_page">

<div className="hero_area">
  <Navbar/>
</div>

<section className="contact_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container">
      <h2>
        Get In Touch
      </h2>
    </div>
    <div className="row">
      <div className="col-md-7">
        <div className="form_container">
          <form action="">
            <div>
              <input type="text" placeholder="Full Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="btn_box">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-5">
        <div className="img-box">
          <img src="assets/images/contact-img.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>




</body>
    </>
  )
}

export default Contact
