import React from 'react'
import Slider from 'react-slick'


const Intropage = () => {
  const settings = {
    infinite: true, // Set infinite to true for infinite loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Set autoplay to true for autoplay
    autoplaySpeed: 2000 // Set autoplay speed in milliseconds
  };
  return (
    <div>
    <div className="container-fluid">
      
          <div className="row">       
          <Slider {...settings}>
           <div className="slider-container">

          <div> 
                 <img src="https://images.indianexpress.com/2024/03/thalaivar-171-1600.jpeg?w=640"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/></div>
</div>
          <div>
          <img src="https://i.pinimg.com/originals/c7/b2/6a/c7b26aafbe3b8a194f8ee2d5c95f107a.jpg"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/></div>

          <div>
          <img src="https://e0.pxfuel.com/wallpapers/837/893/desktop-wallpaper-avengers-endgame-16-9-tried-my-best-marvelstudios-cool-avengers-endgame.jpg"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/></div>


          <div>
          <img src="https://wallpapercave.com/dwp1x/wp6655506.jpg"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/>
          </div>

          <div>
          <img src="https://wallpapercave.com/wp/wp4686158.jpg"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/>
          </div>

          <div>
          
           <img src="https://wallpapercave.com/wp/wp13392470.jpg"  className="image-fluid d-flex image-rounded"  alt=""  width="100%" height="320px"/></div>
</Slider>
<div className="row justify-content-center">
<button className="btn btn-light pb-4 " style={{width:"160px",height:"20px",padding:"0px 5px 0px"}}> Watch now</button>
</div>
    </div></div>
    <hr />
    </div>
  )
}

export default Intropage