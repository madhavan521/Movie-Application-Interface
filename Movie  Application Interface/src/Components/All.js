import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const All = ({ alls,allss,allsss }) => {
  return (
    <div className="container-fluid">
    <Navbar />
      <div className="row">
        <h3>All movies</h3>
      </div>
      <hr />
      <div className=" Allmovies mx-4 ">
      {/* <div className="mt-2 "> */}
        { alls && alls.map((movie) => (
          <Link to="/" key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </Link>
        ))}
        { allsss && allsss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { alls && alls.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { allsss && allsss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        { allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}{ allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}{ allss && allss.map((movie) => (
          <div key={movie.id} >
            <img
              className="image-fluid rounded images"
              width="140"
              height="180"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt="" />
          </div>
        ))}
        </div>
      </div>
    // </div>
  );
};

export default All;
