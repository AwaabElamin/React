import React from "react";
import Rater from "./Rater";
import "bootstrap/dist/css/bootstrap.min.css";
import laptop from '../images/laptop.jpg';
function Product(){
    return(
        <div className="thumbnail" style={{textAlign:"center"}}>
            <div className="row">
                <div className="col-sm-6">
                    <img src={laptop} alt="laptop" className="img img-rounded img-responsive"/>
                </div>
                <div className="col-sm-6">
                    <div className={"caption"}>
                        <a href={"/productDetails"}>
                            <h3>Gamia laptop</h3>
                            <h4><span style={{color:"red"}}>Rs.33000</span></h4>
                            <p>An excellent choice for an awesome gaming experience.</p>
                            <Rater/>
                            <span style={{fontSize:"9px"}}>3/5</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;