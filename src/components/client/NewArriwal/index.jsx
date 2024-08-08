import React from "react";
import { useGetnewArrivalsQuery } from "../../../redux/api/apinewarrivals";
import "../NewArriwal/style.css"

function NewArriwal() {
  const { data, isLoading, isError } = useGetnewArrivalsQuery();

  return (
    <div className="container newArriwal">
      <div className="d-flex justify-content-center">{isLoading && <h2>Loading ...</h2>}</div>
      <div className="d-flex justify-content-center">{isError && <h2>ERROR</h2>}</div>
      
      
        <div className="container">
            {
                data && ( 
                    <>
                    <div className="row">
                        <div className="col-12">
                        <h2 className="head_arriwals">New Arriwals</h2>
                        </div>
                            
                    </div>

                    <div className="row">

                    {data.map((items, index)=>{

                       return <div key={index} className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="arriwals_img">
                                    <img src={items.image} alt="arriwalsimage" />
                                    {console.log(items.image)}
                                </div>
                                <div className="arriwals_content">
                                    <p>{items.name}</p>
                                </div>
                                <div className="arriwals_price">
                                    <p>
                                        $ {items.price.toString().slice(0, 3)}
                                        
                                        
                                    </p>
                                </div>

                        </div>

                    })}

                        
                    </div>
                    </>


                )
            }
        </div>
    </div>
  );
}

export default NewArriwal;
