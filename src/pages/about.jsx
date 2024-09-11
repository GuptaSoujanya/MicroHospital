import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
function About() {
  return (
    <>
      <body className="sub_page">

<div className="hero_area">
<Navbar/>
</div>

<section className="about_section layout_padding">
  <div className="container  ">
    <div className="row">
      <div className="col-md-6 ">
        <div className="img-box">
          <img src="assets/images/about-img.jpg" alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="detail-box">
          <div className="heading_container">
            <h2>
              About <span>Hospital</span>
            </h2>
          </div>
          <p>
            has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
          </p>
          <a href="">
            Read More
          </a>
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

export default About
