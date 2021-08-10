import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import Video from './video/Studio-Suite-Room-Explorer.mp4';
import img from './img/StudioSuite-001.jpg';
import ProductList from './components/productList';
import Category from './components/category';
const flex50= {flexBasis:"50%"};

function GioiThieu(){
  return(
  <div class="row-2">
    <div class="flex-container">
        <div style={flex50}>
          <div class="col-inner">
            <div class="text-inner">
                <h1>
                  GIỚI THIỆU VỀ
                  <br/>
                  CÔNG TY ECHO
                </h1>
                <p>
                Công ty ECHO hoạt động trong lĩnh vực thiết kế, trang trí và cung cấp sản phẩm nội thất thông minh. 
                Với kinh nghiệm hơn 1 năm trong nghề, ECHO luôn tạo nên sự độc đáo và trọn vẹn cho mỗi công trình.
                </p>
          </div>
          <a class="link-white"><span>Tìm hiểu thêm</span></a>
        </div>
        </div>
        <div class="logo-parent"style={flex50}>
          <img class="logo-flex" src={img}></img>
        </div>
    </div>
  </div>

  );
}

function App() {
  return (
    <div>
    <Header/>
      <div>
        <video  autoPlay muted src={Video} type="video/mp4" />
      </div>
      <GioiThieu/>
      <ProductList/>
      <Category/>
    <Footer/>
    </div>
  );
}

export default App;
