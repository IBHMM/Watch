import React from "react";
import { useGetPopularItemsQuery } from "../../../redux/api/apipopularitems";
import "../Product/style.css";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cartSlice";


function Product() {
  const { data, isLoading, isError } = useGetPopularItemsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product)
  };

  return (
    <div className="container product_section">
      <div className="row">
        <div className="d-flex justify-content-center">
          {isLoading && <h2>Loading ...</h2>}
        </div>
        <div className="d-flex justify-content-center">
          {isError && <h2>ERROR</h2>}
        </div>

        <div className="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10" bis_skin_checked="1">
            <div class="product_tittle text-center" bis_skin_checked="1">
              <h2>Popular Items</h2>
              <p className="mb-5">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        {data &&
          data.map((product, index) => {
            return (
                <div className="col-md-4" key={index}>
                  <div
                    className="bgImg_watch mb-5"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <div className="product_favIcon">
                    <CiHeart />

                    </div>
                    <button onClick={() => handleAddToCart(product)} className="product_btn">Add to cart</button>
                  </div>
                </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default Product;
