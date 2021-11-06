import React from "react";
import ReactDom from "react-dom";
import logo from './logo2.png'
import logo1 from './logo1.png'




function Card(props){

  const {Image,DES}=props;
  return <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo1} class="logo1 d-block w-75 mx-auto   " alt="..."/>
    </div>
    <div class="carousel-item  ">
      <img src={logo} class=" logo2 d-block w-75 mx-auto" style={{height:"700px"}} alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src="https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934?b=1&k=20&m=1267010934&s=170667a&w=0&h=bhFEvUKYFMSd5EyTr9vkRo3SO89Jdm78BI0UXuoDakQ=" class="logo3 d-block w-75 mx-auto" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



}
function Scard(){
return <React.Fragment>
<Card />


</React.Fragment>
}

export default Scard ;