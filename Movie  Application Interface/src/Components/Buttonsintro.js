import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

const Buttonsintro = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 3,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className="container-fluid">
        <div className="row ">
      <Slider {...settings}>
{['Movies','Tvshows',"Kids","Action","Comedy","Drama","Adventures","Cartoon","Animations"].map((title,index)=>

 <Link to="/All" key={index} >

<button className="btn btn-danger" style={{width:"130px"}} >{title}</button> 

    </Link> )} 
     </Slider> </div>
        <hr /></div>
    </div>
  )
}

export default Buttonsintro