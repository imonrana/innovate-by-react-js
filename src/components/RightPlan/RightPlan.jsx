import React from 'react'

// import img
import RightPlanImgOne from "../../assets/Right_plan_img_one.png"
import RightPlanImgTwo from "../../assets/Right_plan_img_two.png"
import RightPlanImgThree from "../../assets/Right_plan_img_three.png"

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"

const RightPlan = () => {
  return (
    <section id="right_plan">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="right_plan_title">
            <h2 className="title">
              Choose The Right Plan
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-10 mx-auto">
          <div className="right_plan_card">
            <h6 className="card_title">
              Basic
            </h6>
            <div className="card_img">
              <img src={RightPlanImgOne} alt="Right_plan_img_one" />
            </div>
            <p className="ammount">
              <sup> <FontAwesomeIcon icon = {faDollarSign} /> </sup> 160
            </p>
            <p className="pera">
              Responsive Design
              Dynamic Elements
              Service Pages
              Custom Design & Features
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-10 mx-auto">
          <div className="right_plan_card">
            <h6 className="card_title">
              Professional
            </h6>
            <div className="card_img">
            <img src= {RightPlanImgTwo} alt="Right_plan_img_two" />
            </div>
            <p className="ammount">
              <sup><FontAwesomeIcon icon = {faDollarSign} /> </sup> 240
            </p>
            <p className="pera">
              Responsive Design
              Dynamic Elements
              Service Pages
              Custom Design & Features
            </p>
          </div>
        </div>
          <div className="col-lg-4 col-10 mx-auto">
          <div className="right_plan_card">
            <h6 className="card_title">
              Exclusive
            </h6>
            <div className="card_img">
              <img src= {RightPlanImgThree}alt="Right_plan_img_three" />
            </div>
            <p className="ammount">
              <sup><FontAwesomeIcon icon={faDollarSign} /> </sup> 325
            </p>
            <p className="pera">
              Responsive Design
              Dynamic Elements
              Service Pages
              Custom Design & Features
            </p>
          </div>
        </div>
          </div>
        </div>
   </section>
  )
}

export default RightPlan