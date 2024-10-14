import React from 'react'
import paymentImg from "../../assets/payment.png"
import remitance from "../../assets/remitance_one.jpeg"
import remitanceTwo from "../../assets/remitance_two.png"
import alsoLikeShape from "../../assets/also_like_shape.png"

const AlsoLike = () => {
  return (
    <section id="also_like">
    <div className="container">
     <div className="row justify-content-center">
       <div className="col-lg-10">
         <div className="also_like_title">
           <h2 className="title">
             You May Also Like 
           </h2>
         </div>
         <div className="also_like_list">
           <div className="item">
             <div className="list_img">
               <img src={paymentImg} alt="paymentpng" />
             </div>
           <div className="list_info">
             <ul>
               <li>
                 <a href="#">News </a>
               </li>
               <li>
                 <a href="#"><span>By</span>Tomas Nikelson  </a>
               </li>
               <li>
                 <a href="#"><span>Posted</span>5 Hours Ago</a>
               </li>
             </ul>
             <p className="list_pera">
               Punto Pago Allows Quick And Secure Payments For Services In Panama
             </p>
             <button>
               <a href="#">Read more</a>
             </button>
           </div>
         </div>
         <div className="item">
           <div className="list_img">
             <img src={remitance} alt="remitance_one" />
           </div>
         <div className="list_info">
           <ul>
             <li>
               <a href="#">News </a>
             </li>
             <li>
               <a href="#"><span>By</span>Tomas Nikelson  </a>
             </li>
             <li>
               <a href="#"><span>Posted</span>5 Hours Ago</a>
             </li>
           </ul>
           <p className="list_pera">
             The User Can Also Replenish A Balance Make Remittances 
           </p>
           <button>
             <a href="#">Read more</a>
           </button>
         </div>
       </div>
       <div className="item">
         <div className="list_img">
           <img src= {remitanceTwo} alt="remitance_two" />
         </div>
       <div className="list_info">
         <ul>
           <li>
             <a href="#">News </a>
           </li>
           <li>
             <a href="#"><span>By</span>Tomas Nikelson  </a>
           </li>
           <li>
             <a href="#"><span>Posted</span>5 Hours Ago</a>
           </li>
         </ul>
         <p className="list_pera">
           The User Can Also Replenish A Balance Make Remittances 
         </p>
         <button>
           <a href="#">Read more</a>
         </button>
       </div>
     </div>
         </div>
       </div>
     </div>
    </div>
    <div className="also_like_shape">
     <img src= {alsoLikeShape} alt="also_like_shape" />
    </div>
   </section>
  )
}

export default AlsoLike