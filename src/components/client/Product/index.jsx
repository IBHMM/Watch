import React from "react";
import { useGetPopularitemsQuery } from "../../../redux/api/apipopularitems";

function Product() {
  const { data, isLoading, isError } = useGetPopularitemsQuery();
    console.log(data)
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center">
          {isLoading && <h2>Loading ...</h2>}
        </div>
        <div className="d-flex justify-content-center">
          {isError && <h2>ERROR</h2>}
        </div>
        {products && (
            products.map((product) => {
            return    <div className="col-md-4">
                    {/* <div className="bgImg_watch" style={{backgroundImage:`${product.image}`}} >

                    </div> */}
                </div>
            })
        )}
      </div>
    </div>
  );
}

export default Product;
