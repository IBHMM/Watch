import React from "react";

function Header() {
  return (
    <main className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
          <div class="hero__caption" bis_skin_checked="1">
            <h1
              data-animation="fadeInLeft"
              data-delay=".4s"
              data-duration="2000ms"
              class=""
              style="animation-delay: 0.4s;"
            >
              Select Your New Perfect Style
            </h1>
            <p
              data-animation="fadeInLeft"
              data-delay=".7s"
              data-duration="2000ms"
              class=""
              style="animation-delay: 0.7s;"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>

            <div
              class="hero__btn"
              data-animation="fadeInLeft"
              data-delay=".8s"
              data-duration="2000ms"
              style="animation-delay: 0.8s;"
              bis_skin_checked="1"
            >
              <a
                href="industries.html"
                class="btn hero-btn"
                bis_skin_checked="1"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block"></div>
      </div>
    </main>
  );
}

export default Header;
