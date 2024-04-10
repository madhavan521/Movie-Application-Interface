import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Topmovies from './Topmovies';
import Topshow from './Topshow';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Ratedtv from './Ratedtv';
import Trending from './Trending';
import Swal from 'sweetalert2';


const Singlemovies = ({ topmovies, trendings, topshows, settings, alls,allss,allsss }) => {
    const { id } = useParams();
    const history =useLocation()
     const handleClicksub=()=>{
        Swal.fire({
            title: "Please Subcribe for watch movie",
            showClass: {
              popup: `
                animate__animateds
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
     }

    const movieTopMovies = topmovies.find(movie => movie.id === parseInt(id));
    const movieTopShows = topshows.find(movie => movie.id === parseInt(id));
    const movieTrendings = trendings.find(movie => movie.id === parseInt(id));
    const movieTopMovie = allss.find(movie => movie.id === parseInt(id));
    const movieTopShow = alls.find(movie => movie.id === parseInt(id));
    const movieTrending = allsss.find(movie => movie.id === parseInt(id));
    


    const movie = movieTopMovies || movieTopShows || movieTrendings || movieTopMovie || movieTopShow || movieTrending;

    if (!movie) {
        return <div>Movie not found</div>;
    }
const handleClick =(clickedMovieId)=>{
  history.push=(`/Singlemovies/${clickedMovieId}`)
}
    return (
        <div className="container-fluid">
            <Navbar />
            <div>
                <div key={movie.id}>
                    <img className="image-fluid rounded" height="320px" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="100%" alt={movie.title} />
                    <div className="row my-2 justify-content-center">
                        <h4>{movie.title}</h4>
                    </div>
                    <div className="row my-3">
                        <p><i>{movie.release_date}</i> | <i>2h 45m</i> | <i>English</i> | <i>{movie.vote_average}</i></p>
                    </div>
                    <div className="row my-3 justify-content-center">
                        <button className="btn btn-light watch  "  onClick={handleClicksub}> Subscribe to watch</button>
                    </div>
                    <div className="row my-3">
                        <h6><i>Romance</i> | <i>Action</i> | <i>Drama</i>| <i>Adventure</i></h6>
                    </div>
                    <div className="row my-3">
                        <h6>{movie.overview}</h6>
                    </div>
                </div>
            </div>
            <hr />
            <h3>Related Movies</h3>
            <div className="row">
               <Link to="/"> 
               <Topshow topshows={topshows} settings={settings}  onClick={handleClick}/>
                <Topmovies  topmovies={topmovies} settings={settings} />
                <Trending trendings={trendings} settings={settings} />
            </Link></div>
        </div>
    );
};

export default Singlemovies;
