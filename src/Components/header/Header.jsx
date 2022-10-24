import React from "react";
import "./header.css";
import Dev from "../../assets/img/Dev.png";

function Header() {
  return (
    <header className="masthead montaña-bg">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6 title-header">
            <div className="mb-5 mb-lg-0 text-center text-lg-start title-z">
              <h1 className="display-1 lh-1 mb-3">Te ayudamos a crear tu sitio web</h1>
              <p   className="lead fw-normal  mb-5" >
                Ofrecemos soluciones adaptables para ubicar tu emprendimiento dentro del mundo digital
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="masthead-device-mockup">
         
              <svg
                class="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect>
              </svg>
              <svg
                class="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div class="device-wrapper">
              <div className="device">
              <div class="screen ">
              <img
                  className="img-header d-none d-md-block"
                  src={Dev}
                  alt=""
                />
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
