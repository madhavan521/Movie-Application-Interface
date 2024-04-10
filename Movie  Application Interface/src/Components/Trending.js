import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const Trending = ({trendings ,settings}) => {
  return (
    <div>
    <div className="container-fluid">
    <hr />
        <div className="row">
            <div className="col"><h3>Trending</h3></div>
            <div className="col d-flex justify-content-end">
            <Link to="/All"><h6>see more</h6></Link>
            </div>
        </div>         
           <div className="row">
          <Slider {...settings}>
  {Array.isArray(trendings) && trendings.map(trending => (
      <Link to={`Singlemovies/${trending.id}`} key={trending.id} >
    <img
      className="image-fluid rounded"
      width="140"
      height="180"
      src={`https://image.tmdb.org/t/p/w500${trending.poster_path}`}
      alt=""
    />
    </Link>
  ))}
</Slider>


           </div>

    </div>
    </div>
  )
}

export default Trending