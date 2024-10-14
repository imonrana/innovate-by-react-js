import React from 'react'
import footerLogo from "../../assets/footer_logo.png"
const Footer = () => {
  return (
    <footer id="footer">
       <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="footer_logo">
             <a href="#">
              <img src= {footerLogo} alt="footer_logo" />
             </a>
            </div>
            <div className="footer_description">
              <p className="pera">
                Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="footer_menu">
              <div className="item">
                <p>
                  Features
                </p>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Benifit</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <p>
                  Products
                </p>
                <ul>
                  <li>
                    <a href="#">Task Management</a>
                  </li>
                  <li>
                    <a href="#">Company growth</a>
                  </li>
                  <li>
                    <a href="#">Time tracking</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <p>
                  Support
                </p>
                <ul>
                  <li>
                    <a href="#">Customer service</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_bottom">
              <p>@2024 Innovate.All rights reserved.</p>
              <div className="trams">
                <p>
                <a href="# ">Privacy policy</a>
              </p>
              <p>
                <a href="#">Terms & condition</a>
              </p>
              </div>
            </div>
          </div>
        </div>
       </div>

       </footer>
  )
}

export default Footer