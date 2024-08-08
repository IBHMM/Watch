import React from "react";
import "../Header/style.css"
import { useGetPopularitemsQuery } from "../../../redux/api/apipopularitems";
import { useGetnewArrivalsQuery } from "../../../redux/api/apinewarrivals";

function Header() {

  // const {isLoading, isError, data} = useGetPopularitemsQuery();
  const {isLoading, isError, data} = useGetnewArrivalsQuery();

  console.log(data, "data");
  console.log(isLoading, "isLoading");
  console.log(isError, "isError");

  return (
    <main className="container">
      <div className="row justify-content-center align-items-center container_heading">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
          <div class="header_content">
            <h1 className="content_heading">Select Your New Perfect Style</h1>
            <p className="content_desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>

            <div className="content_btn">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
            <div className="watch_bg">
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="backgroundWatch" />
            </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
