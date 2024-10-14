import React from 'react'
// import img
import impactShapeTwo from "../../assets/impact_shape_two.png"
import impactIconOne from "../../assets/impact_icon1.png"
import impactIconTwo from "../../assets/imapct_icon2.svg"
import impactImgOne from "../../assets/impact_img_one.png"
import impactImgTwo from "../../assets/impact_img-two.png"
import impactImgThree from "../../assets/impact_img_three.png"
import impactShapeOne from "../../assets/impact_shape_one.png"
const RealImpact = () => {
  return (
    <section id="real_impact">
    <div className="impact_shape">
      <img src={impactShapeTwo} alt="impact_shape_two" />
    </div>
    <div className="container">
      <div className="row">
      <div className="col-lg-12">
        <div className="impact_title_info">
          <h2 className="title">
            We create real impact
          </h2>
          <p className="pera">
            We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
       <div className="col-lg-6">
        <div className="impact_list">
          <div className="item">
            <div className="impact_icon">
              <img src= {impactIconOne}alt="impact_icon1" />
            </div>
           <div className="item_info_warpper">
             <h4 className="item_title">
              Competitive analysis
            </h4>
            <p className="pera">
              With an all-new look and powerful features, Ekko is the best way to ensure success for your business.
            </p>
           </div>
          </div>
          <div className="item">
            <div className="impact_icon">
            <img src= {impactIconTwo}alt="impact_icon2" />
            </div>
           <div className="item_info_warpper">
             <h4 className="item_title">
              Strategy And research
            </h4>
            <p className="pera">
              Save money and start building your website using the best tools available on the market today.
            </p>
           </div>
          </div>
      </div>
     </div>
     <div className="col-lg-6">
      <div className="impact_img_warpper">
        <img src= {impactImgOne} alt="impact_img_one" />
        <img src= {impactImgTwo} alt="impact_img_two" />
        <img src= {impactImgThree} alt="impact_img_three" />
        <img src= {impactShapeOne} alt="impact_shape_one" />
      </div>
    </div>
    </div>
    </div>
    
   </section>
  )
}

export default RealImpact