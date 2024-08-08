import React from "react";
import { useGetPhotosQuery } from "../../../redux/api/apiphotos";
import "../Photos/style.css";

function Photos() {
  const { data, isLoading, isError } = useGetPhotosQuery();

  console.log(data);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        {isLoading && <h2>Loading ...</h2>}
      </div>
      <div className="d-flex justify-content-center">
        {isError && <h2>ERROR</h2>}
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <img src={data[0]} alt="" />
        </div>
        <div className="col-md-3">
          <img src={data[1]} alt="" />
        </div>
        <div className="col-md-3 d-flex flex-column gap-4">
          <div>
            <img src={data[2]} alt="" />
          </div>

          <div>
            <img src={data[3]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
