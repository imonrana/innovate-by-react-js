import React from "react";

import counterShape from "../../assets/conter_shape.png"

const Counter = () =>{
    return(
        <section id="counter">
        <div className="container">
            <div className="row">
                <div className="counter_shape">
                    <img src= {counterShape} alt="counter_shape" />
                </div>

                <div className="counter_item col-lg-3">
                    <div className="item_info text-center">
                        <h4>53k</h4>
                        <p>Happy client</p>
                    </div>
            </div>
            <div className="counter_item col-lg-3">
                <div className="item_info text-center">
                    <h4>10k</h4>
                    <p>Projects Done</p>
                </div>
        </div>
        <div className="counter_item col-lg-3">
            <div className="item_info text-center">
                <h4>120</h4>
                <p>Gets Award</p>
            </div>
    </div>
    <div className="counter_item col-lg-3">
        <div className=" text-center">
            <h4>16</h4>
            <p>operated years</p>
        </div>
</div>
        </div>
        </div>
    </section>
    )
}

export default Counter