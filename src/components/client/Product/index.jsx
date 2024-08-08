import React from "react";
import { useGetPopularItemsQuery } from "../../../redux/api/apipopularitems";
import "../Product/style.css";

function Product() {
  const { data, isLoading, isError } = useGetPopularItemsQuery();

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center">
          {isLoading && <h2>Loading ...</h2>}
        </div>
        <div className="d-flex justify-content-center">
          {isError && <h2>ERROR</h2>}
        </div>
        {data &&
          data.map((product, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div
                  className="bgImg_watch m-2"
                  style={{ backgroundImage: `url(${product.image})` }}
                >

                    <button>add</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
