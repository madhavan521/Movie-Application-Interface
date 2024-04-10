import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const Topshow = ({topshows,settings}) => {

  
  return (
    <div>
    <div className="container-fluid">
    <hr /> 
    <div className="row">
      <div className="col">      <h3>Tv shows</h3>
</div>
      <div className="col d-flex justify-content-end">
      <Link to="/All"><h6>see more</h6></Link>
      </div>

    </div>
        <div className="row slider-container">
            <Slider {...settings} >
            {Array.isArray(topshows) && topshows.map(topshow=>
            
                <Link to={`Singlemovies/${topshow.id}`} key={topshow.id}>
                {/* <h4>{topshow.title}</h4> */}
                <img className="image-fluid rounded" width="140" height="180" src={`https://image.tmdb.org/t/p/w500${topshow.poster_path}`} alt="" />
                </Link>
            )}
            </Slider>
        </div>
    </div>
    
    </div>
  )
}

export default Topshow