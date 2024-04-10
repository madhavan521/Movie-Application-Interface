import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Topmovies = ({topmovies,settings}) => {
  

  return (
    <div>
      <div className="container-fluid">
      <hr />
      <div className="row">
        <div className="col">      <h3>Movies</h3>
</div>
        <div className="col d-flex justify-content-end">
        <Link to="/All"><h6>see more</h6></Link>
        </div>

      </div>
        <div className="row d-flex justify-content-center topmovies  slider-container">
        <Slider {...settings}>
          {topmovies && topmovies.map((topmovie) => (
          <Link to={`Singlemovies/${topmovie.id}`}key={topmovie.id} className=" ">
              <img  className="image-fluid rounded" width="140" height="180" src={`https://image.tmdb.org/t/p/w500${topmovie.poster_path}`} alt={topmovie.title} />
                          {/* <img  className="image-fluid rounded" src={`https://image.tmdb.org/t/p/w500${topmovie.backdrop_path}`} alt={topmovie.title} /> */}

</Link>
          ))}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Topmovies;
