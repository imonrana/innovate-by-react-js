import React from 'react'
// import img
import sliderImg from "../../assets/slider_img.png"

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const Testimonial = () => {
  return (
    <section id="testimonial">

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title">
              What The People Thinks About Us 
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-10 mx-auto">
            <div className="slider">
              <div className="profile">
                <img src= {sliderImg} alt="slider_img" />
              </div>
              <div className="star">
              <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="slider_pera">
                Lesser Replenish bearing they’re him cattle kind dominion. You 
                which fill place. Land she’d subdue divided gathering blessed
                seasons it. Without, wherein days.
              </p>
              <div className="profile_info">
                <h6>Lukan Depina</h6>
                <p>Ceo And Head Of Idea</p>
              </div>
              <div className="button">
                <div className="prev">
                  <a href="#"><FontAwesomeIcon icon={faAngleLeft} className='i' /></a>
                </div>
                <div className="next">
                  <a href="#"><FontAwesomeIcon icon={faAngleRight} className='i' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default Testimonial