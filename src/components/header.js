import React from "react";
import ReactDOM from "react-dom";
import '../css/header.css'
import logo from '../img/logo.png'
import Spnav from './subnav';

const top= {backgroundColor:"transparent"};
const scrolled = { 
  backgroundColor:"white",
  opacity:"0.9"
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = { style: top };
    
        //this.handleScroll = this.handleScroll.bind(this);
      }
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = e => {
        if (window.scrollY < 200) {
          this.setState({ style: top });
         
        } else if (window.scrollY > 200) {
          this.setState({ style: scrolled });
          
        }
      }
    render(){
        return (
        
            <header style={this.state.style}  onScroll={this.handleScroll}>
              <nav class="navbar navbar-dark  navbar-expand-lg justify-content-between">
                <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbar-list-9" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100 order-3 order-lg-1" id="navbar-list-9">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item nav-sp">
                      <a class="nav-link" href="#">Sản phẩm</a>
                      <Spnav/>
                    </li>
                   
                    <li class="nav-item">
                      <a class="nav-link" href="#">Giới thiệu</a>
                    </li>
                  </ul>
                </div>
                <a class="navbar-brand mx-lg-0 order-1 order-lg-2" href="#">
                  <img src={logo} width="30" height="30" alt="logo" class="logo-echo"></img>
                 
                </a>
                <div class="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"></img>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a class="dropdown-item" href="#">Dashboard</a>
                          <a class="dropdown-item" href="#">Edit Profile</a>
                          <a class="dropdown-item" href="#">Log Out</a>
                        </div>
                      </li>   
                    </ul>    
                </div>
              </nav>
            </header>
        );
    }
}

export default Header;

/*
<ul class="header" >
            <li><a>Trang chủ</a></li>
            <li><a>Giới thiệu</a></li>
            <li><a>Sản phẩm</a></li>
            <li class="logo"><a href="#"><img src="https://1000marken.net/wp-content/uploads/2021/01/Apple-logo.png"></img></a></li>
            <li><a>Liên hệ</a></li>
            <li><a>Cart</a></li>
            </ul> */