import React from "react";
import { usePhotosQuery } from "../../../redux/api/apiphotos";

function Photos() {
  const { data, isLoading, isError } = usePhotosQuery();

  console.log(data)
  return (
    <div className="container">
        <div className="d-flex justify-content-center">{isLoading && <h2>Loading ...</h2>}</div>
        <div className="d-flex justify-content-center">{isError && <h2>ERROR</h2>}</div>
      <div className="row">
        {data.length > 0 && data.map((item)=>{
         return <div className="">
                <img src={item} alt="" />
            </div>
        })}
      </div>
    </div>
  );
}

export default Photos;
