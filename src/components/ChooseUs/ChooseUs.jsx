import React from 'react'

import chooseUsShape from "../../assets/choose_us_shape.png"

const ChooseUs = () =>{
    
    return(
        <section id="choose_us">
        <div className="choose_us_shape">
          <img src={chooseUsShape} alt="choose_us_shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 xs-order-1">
              <div className="choose_item_warpper">
                <div className="choose_item">
                  <p className="pera">
                    We solve real-world problems through people and the web.
                  </p>
                </div>
                <div className="choose_item">
                  <p className="pera">
                    We make processes and technology work efficiently together.
                  </p>
                </div>
                <div className="choose_item">
                  <p className="pera">
                    We advance improve existing technology through research and development.
                  </p>
                </div>
                <div className="choose_item">
                  <p className="pera">
                    We develop long-lasting and scalable solutions, relationships partnerships.
                  </p>
                </div>
              </div>
              </div>
            <div className="col-lg-6">
              <div className="choose_us_info">
                <h4 className="title">
                  Why Choose Us
                </h4>
                <p className="pera">
                  We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.
                </p>
                <button type="button">
                  <a href="#">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
       </section>
    )
}

export default ChooseUs