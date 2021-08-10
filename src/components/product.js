import React from "react";
import '../css/productlist.css'
import product1 from '../img/product/1/StudioSuite_Full_Light.png';

class Product extends React.Component {
    constructor() {
        super();
      }
    render(){
        return (
            <div class="col-selected">
                <div class="col-inner">
                    <div class="containerImg">
                        <img class="productImg" src={product1}></img>
                    </div>
                    <div class="productName">
                        <p>Echo Studio Suite</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
