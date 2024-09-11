import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function Doctor() {
  return (
    <>
      <body className="sub_page">

<div className="hero_area">
  <Navbar/>

</div>

<section className="team_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Our <span>Doctors</span>
      </h2>
    </div>
    <div className="carousel-wrap ">
      <div className="owl-carousel team_carousel">
        <div className="item">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/team1.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Hennry
              </h5>
              <h6>
                MBBS
              </h6>
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/team2.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Jenni
              </h5>
              <h6>
                MBBS
              </h6>
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/team3.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Morco
              </h5>
              <h6>
                MBBS
              </h6>
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
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

export default Doctor
