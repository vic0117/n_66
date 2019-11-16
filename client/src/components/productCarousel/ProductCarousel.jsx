import React from "./node_modules/react";
import Slider from "./node_modules/react-slick";
import { Container, Row, Col, Tabs, Tab, Card, Button } from "./node_modules/react-bootstrap";
import "./ProductCarousel.css";
// import { object } from "prop-types";

class ProductCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      productPics: props.pics,
      data: props.data,
      productsToBuy: []
    };
  }

  componentDidMount() {

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }


  sliders() {
      return this.props.pics.map(item => (
        <div key={item} className="pic">
          <img src={"http://localhost:3000/images/products/" + this.props.data[0].product_file_name + "/" + item} 
          alt={this.props.data[0].product_file_name} />
        </div>
      ));
  }

  sliders2() {
    return this.props.pics.map(item => (
      <div key={item} className="pic2">
        <img src={"http://localhost:3000/images/products/" + this.props.data[0].product_file_name + "/" + item} 
        alt={this.props.data[0].product_file_name}  />
      </div>
    ));
  }

  addToCart = ()=>{
    
    let aaa =  this.props.data[0];
    let product = {};
    product.product_name = aaa.product_name;
    product.product_img = aaa.product_pictures;
    product.product_size = aaa.product_size;
    product.product_price = aaa.product_price;
    product.product_amount = aaa.product_quantity;

    // console.log(product)

    if(localStorage.getItem('productsToBuy') ){
      let bbb = JSON.parse(localStorage.getItem('productsToBuy'));
      bbb.push(product);
      localStorage.setItem("productsToBuy", JSON.stringify(bbb));
    }
    else{
      let ddd= []
      ddd.push(product)
      localStorage.setItem("productsToBuy", JSON.stringify( ddd));
    }

    
   
    
    
    // localStorage.setItem("productsToBuy" , bbb );
    
  }

  render() {

    const  {data} = this.props;


    const mainSettings = {
      // dots: false,
      // infinite: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // vertical: false,
      // verticalSwiping: false,
      
    };

    const thumbSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay:true,
      autoplaySpeed: 3000
    };

    return (
      <>
      
        <Container className="ProductCarousel">
          <Row className="mt-5 carouselsRow">
            <Col md={8} className="d-flex justify-content-center">
              <div className="mr-5 sideCarousel">
                  <Slider
                    {...thumbSettings}
                    className="thumbCarousel"
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {this.sliders()}
                  </Slider>
                
              </div>

              <div className="">
              
                <Slider
                  {...mainSettings}
                  className="mainCarousel"
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {this.sliders2()}
                </Slider>
               
              </div>
            </Col>

            <Col lg={4}>
              {data.map(item => (
                <div key={item.product_id} className="detailCard">
                  <div>
                    <h2>{item.product_name}</h2>
                    <h5>NT$ {item.product_price}</h5>
                    <Button className="wishBtn mx-auto" >
                      加入願望清單
                    </Button>
                    <Button onClick={this.addToCart} className="addToCartBtn mx-auto" >
                      放入購物車
                    </Button>
                    <p>免費快遞送貨 / 免費退貨</p>
                  </div>

                  <div>
                    <h4>規格說明</h4>
                    <Tabs
                      className="text-left"
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="home" title="材質">
                        <p className="text-left">
                          {item.product_material}
                        </p>
                      </Tab>
                      <Tab eventKey="profile" title="內容">
                        <p className="text-left">
                          {JSON.parse(item.product_intro)[0]}
                        </p>
                      </Tab>
                      <Tab eventKey="contact" title="重量">
                        <p className="text-left">{item.product_weight}</p>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
          <h1 className=" mx-auto text-center">還可搭配</h1>
          <Row className="recommend  pt-5 d-flex ">
            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/OrtovoxFreeRider26L/free-ride-free-rider-24-46736-night-blue-blend-hir5da0941bdd2ef_1200x2000.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Ortovox FreeRider 26L 背包</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GrandOfuton/BD-050_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>日式單人睡墊組</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GasGrillBurner\GS-355_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>瓦斯燒烤爐 雪峰苑</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GigaPowerBFLantern/GL-300A_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>GP瓦斯營燈</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </>
    );
  }
}

export default ProductCarousel;
