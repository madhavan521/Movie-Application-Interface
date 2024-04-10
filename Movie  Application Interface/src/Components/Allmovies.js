import React from 'react'

const Allmovies = ({intros}) => {
  return (
    <div> <div className="container">
    <div className="row">
    <h2> all movieTopMovies</h2></div>
        
        {
            intros && intros.map((movie)=>
            <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image}  className="images" alt="" />

            </div>
            )
        }
    </div>
    </div>
  )
}

export default Allmovies