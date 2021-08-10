import React from "react";
import '../css/productlist.css';
import Product from './product';

class ProductList extends React.Component {
    constructor() {
        super();
      }
    render(){
        return (
            <div class="col-newProduct">
                <div class="newText">
                    <h1>Sản phẩm mới</h1>
                    
                </div>
                <div class="newText">
                <a class="link-white"><span>Tìm hiểu thêm</span></a>
                </div>
                <div class="pro-list">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        );
    }
}

export default ProductList;
