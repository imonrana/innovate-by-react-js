import React from 'react'
// img import

import bannerIcon from "../../assets/banner_icon.png"
const Banner = ()=>{
    return(
        <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10  m-auto text-center">
              <h1>you’re unique.you R website should be too</h1>
              <p className="m-auto">
                A beautiful website passionately crafted for your small business.
                Our Digital Agency development has changed the way brands and
                businesses use technology for growing business.
              </p>
              <div className="btn">
                  <button type="button">
                      <a href="#">get free quoto</a>
                  </button>
                  <button type="button">
                      <a href="#">Learn More</a>
                  </button>
              </div>
            </div>
            <div className="banner_icon">
              <img src={bannerIcon} alt=" banner_icon" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner