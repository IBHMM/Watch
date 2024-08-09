import React from "react";
import { useGetPhotosQuery } from "../../../redux/api/apiphotos";
import "../Photos/style.css";

function Photos() {
  const { data, isLoading, isError } = useGetPhotosQuery();

  console.log(data);
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        {isLoading && <h2>Loading ...</h2>}
      </div>
      <div className="d-flex justify-content-center">
        {isError && <h2>ERROR</h2>}
      </div>
      <div className="row p-0">
        {data && data.length > 0 && (
          <>
            <div className="col-md-6 photos_sect">
              <img src={data[0]} alt="" />
            </div>
            <div className="col-md-3 photos_sect">
              <img src={data[1]} alt="" />
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-between">
              <div className="photos_sect">
                <img src={data[2]} alt="" />
              </div>
              <div className="photos_sect">
                <img src={data[3]} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Photos;
