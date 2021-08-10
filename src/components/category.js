import React from "react";
import '../css/category.css'
import PhongNgu from '../img/category/phongngu.jpg';
import NhaBep from '../img/category/nhabep.jpg';
import PhongKhach from '../img/category/phongkhach.jpg';
import PhongLamViec from '../img/category/phonglamviec.jpg';
import iot from '../img/category/iot.jpg';
class Category extends React.Component {
    constructor() {
        super();
      }
    render(){
        return (
        <div class="cate-container">
            <div class="cate-iot"> 
                <img class="iot" src={iot}></img>
                <h5 class="centered1">Đồ nội thất IOT</h5>                
            </div>
            <div class="inner">
            <div class="cate-grid">
                <div class="cate cate-khach">
                    <img class="phongkhach" src={PhongKhach}></img>
                    <h5 class="centered">PHÒNG KHÁCH</h5>
                </div>
                <div class="cate cate-lamviec">
                    <img class="phonglamviec" src={PhongLamViec}></img>
                    <h5 class="centered">PHÒNG LÀM VIỆC</h5>
                </div>
                <div class="cate cate-bep">
                    <img class="nhabep" src={NhaBep}></img>
                    <h5 class="centered">NHÀ BẾP</h5>
                </div>
                <div class="cate cate-ngu">
                    <img class="phongngu" src={PhongNgu}></img>
                    <h5 class="centered">PHÒNG NGỦ</h5>
                </div>              
            </div></div>
        </div>
        
        );
    }
}

export default Category;
