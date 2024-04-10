import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";


const Ratedtv = ({ratedtvs ,settings}) => {
  return (
    <div>
    <div className="container-fluid">
    <hr />
    <div className="row">
      <div className="col">      <h3>Top Rated</h3>
</div>
      <div className="col d-flex justify-content-end">
      <Link to="/All"><h6>see more</h6></Link>
      </div>

    </div>
      <div className="row d-flex justify-content-center ratedtvs  slider-container">
      <Slider {...settings}>
        {ratedtvs && ratedtvs.map((ratedtv) => (
        <Link to={`Singlemovies/${ratedtv.id}`}key={ratedtv.id} className=" ">
            <img  className="image-fluid rounded images" width="140" height="180" src={`https://image.tmdb.org/t/p/w500${ratedtv.poster_path}`} alt={ratedtv.title} />
                        {/* <h3 >{ratedtv.title}</h3> */}
                        {/* <img  className="image-fluid rounded" src={`https://image.tmdb.org/t/p/w500${ratedtv.backdrop_path}`} alt={ratedtv.title} /> */}

</Link>
        ))}</Slider>
      </div>
    </div>
  </div>
);
};

export default Ratedtv