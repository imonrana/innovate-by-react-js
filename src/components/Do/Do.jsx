import React from 'react'

import webDesignImg from "../../assets/web_design.png"
import growthImg from "../../assets/growth.png"
import socialMarket from "../../assets/social_marketing.png"
import socialMedia from "../../assets/social_media.png"
import presentation from "../../assets/presentation.png"

const Do = () => {
  return (
    <section id="do">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_info">
              <h4 className="title">
                What We Do
              </h4>
              <p className="pera">
                We are now a team of strategists, engineers, designers, and marketers who both use and develop technology 
              </p>
                <button type="button">
                <a href="#">Contact Us</a>
              </button>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_card">
            <div className="card_icon">
              <img src={webDesignImg} alt="web_design" />
            </div>
            <div className="card_info">
              <h5 className="card_title">
                Web design & Dev 
              </h5>
              <p className="pera">
                Social Media has changed the way we interact & do business while creating
              </p>
            </div>
            <div className="card_btn">
              <button type="button">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_card">
            <div className="card_icon">
              <img src={growthImg} alt="growth" />
            </div>
            <div className="card_info">
              <h5 className="card_title">
                Software Dev 
              </h5>
              <p className="pera">
                Content Marketing is the other fold of online advertisement. If you are looking to build
              </p>
            </div>
            <div className="card_btn">
              <button type="button">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_card">
            <div className="card_icon">
              <img src={socialMarket} alt="social_marketing" />
            </div>
            <div className="card_info">
              <h5 className="card_title">
                Content Writing
              </h5>
              <p className="pera">
                Social Media has changed the way we interact & do business while creating a new avenue.
              </p>
            </div>
            <div className="card_btn">
              <button type="button">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_card">
            <div className="card_icon">
              <img src={socialMedia} alt="social_media" />
            </div>
            <div className="card_info">
              <h5 className="card_title">
                Digital Marketing
              </h5>
              <p className="pera">
                Social Media has changed the way we interact & do business while creating a new avenue.
              </p>
            </div>
            <div className="card_btn">
              <button type="button">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="do_card">
            <div className="card_icon">
              <img src={presentation}alt="presentation" />
            </div>
            <div className="card_info">
              <h5 className="card_title">
                Support & Training
              </h5>
              <p className="pera">
                Content Marketing is the other fold of online advertisement. If you are looking to build
              </p>
            </div>
            <div className="card_btn">
              <button type="button">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Do