import React from "react";

import "../../../scss/login.scss";
import { LoginForm } from "../forms";

function Login() {
  return (
    <div>
      <div className="intro-section" id="home-section">
        <div className="slide-1 bg-image">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row align-items-center form-login">
                  <div
                    className="col-lg-4 ml-auto box"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="form-box">
                      <LoginForm></LoginForm>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
