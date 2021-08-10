import React from "react";
import ReactDOM from "react-dom";

class spNav extends React.Component {
    constructor() {
        super();
      }
    render(){
        return (
            <div class="subNav">
            <div class="page-footer font-small ">
{/*Footer Links*/}
<div class="container text-md-left">

   {/*grid row*/}
 <div class="row">
   {/*} Grid column*/}
   <div class="col-md-2 mx-auto">

      {/*<!-- Links -->*/}
     <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phòng khách</h5>

     <ul class="list-unstyled">
       <li>
       <a href="#!"class="header-link">Sofa</a>
       
       </li>
       <li>
       <a href="#!"class="header-link">Kệ Sách</a>
       </li>
     </ul>

   </div>
   {/*Grid column */}

   <hr class="clearfix w-100 d-md-none"></hr>

   {/* Grid column */}
   <div class="col-md-2 mx-auto">

     {/*} Links */}
     <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phòng ngủ</h5>

     <ul class="list-unstyled">
       <li>
       <a href="#!"class="header-link">Giường</a>
       </li>
       <li>
       <a href="#!"class="header-link">Tủ quần áo</a>
       </li>
     </ul>

   </div>
     {/*} Grid column -->*/}

 </div>
 {/*<!-- Grid row -->*/}

</div>
{/*<!-- Footer Links -->*/}


</div>
      
          </div>
        
        );
    }
}

export default spNav;
