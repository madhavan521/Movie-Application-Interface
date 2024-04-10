import React , { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './Components/All';
import Home from './Components/Home';
import Singlemovies from './Components/Singlemovies';
import Allmovies from './Components/Allmovies';
import Profile from './Components/Profile';
const App = () => {
  const [topmovies, setTopmovies] = useState([]);
  const [topshows,setTopshows] =useState([]);
  const [trendings,setTrendings] =useState([])
  const [ratedtvs,setRatedtvs]=useState([])
  const [alls,setAlls]=useState([])
  const [allss,setAllss]=useState([])
  const [allsss,setAllsss]=useState([])


  // const [intros,setIntros] =useState([])
  //Slider 
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0, // Start from the first slide
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 0 // Start from the first slide
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0 // Start from the first slide
        }
      },
      {
        breakpoint: 480,
        settings: {
            infinite: true,
            speed: 500,
            slidesToShow: 2.3,
            slidesToScroll: 3
        // Start from the first slide
        }
      }
    ]
  };

  // for top movies
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWE5MWJlMmQ1NzA0NmUyMDllYzY5MGFiNjI0OWY5MiIsInN1YiI6IjY1ZTk1NGYwMzM5NmI5MDE2MjgzNWZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gQBBdZJywlXhf4HkTJVrMutW-rrMyhWTuml6FqO5u-I'
      }
    };

    fetch(url, options)
      .then(res =>  res.json())
      .then(json => {
        console.log(json);
        setTopmovies(json.results);
        setAlls(json.results);
      })
      .catch(err => console.error('Error:', err));
   
  }, []);
  // for top shows
  useEffect(()=>{
   const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWE5MWJlMmQ1NzA0NmUyMDllYzY5MGFiNjI0OWY5MiIsInN1YiI6IjY1ZTk1NGYwMzM5NmI5MDE2MjgzNWZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gQBBdZJywlXhf4HkTJVrMutW-rrMyhWTuml6FqO5u-I'
  }
};
fetch(url, options)
.then(res => res.json())
.then(json => {
  console.log(json);
  setTopshows(json.results);
  setAllss(json.results);

})
.catch(err => console.error('error:' + err));
},[]);
//trending
useEffect(() => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWE5MWJlMmQ1NzA0NmUyMDllYzY5MGFiNjI0OWY5MiIsInN1YiI6IjY1ZTk1NGYwMzM5NmI5MDE2MjgzNWZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gQBBdZJywlXhf4HkTJVrMutW-rrMyhWTuml6FqO5u-I'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setTrendings(json.results);
      setAllsss(json.results);
      
    })
    .catch(err => console.error('error:' + err));
}, []);
//ratedtv
useEffect(()=>{
 const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWE5MWJlMmQ1NzA0NmUyMDllYzY5MGFiNjI0OWY5MiIsInN1YiI6IjY1ZTk1NGYwMzM5NmI5MDE2MjgzNWZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gQBBdZJywlXhf4HkTJVrMutW-rrMyhWTuml6FqO5u-I'
  }
};
  

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    setRatedtvs(json.results);
    setAlls(json.results);
    
  })
  .catch(err => console.error('error:' + err));
},[])
 const [intros,setIntros]=useState([])
 useEffect(()=>{
  fetch('https://dummyapi.online/api/movies')
  .then((response) => response.json())
  .then((json) => 
    setIntros(json.results))
  
 },[])
  function handleSearch(){

  }




  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route to="/action" element={<Allmovies intros={intros} />}></Route>
          <Route path='/' element={<Home topmovies={topmovies}  handleSearch={handleSearch} ratedtvs={ratedtvs} trendings={trendings} topshows={topshows} settings={settings} />} />
      <Route path='/Singlemovies/:id' element={<Singlemovies  topmovies={topmovies} alls={alls}  ratedtvs={ratedtvs}  allss={allss}  allsss={allsss} trendings={trendings} topshows={topshows} settings={settings} /> } />

      <Route  path="/All" element={<All alls={alls}  allss={allss}  allsss={allsss} /> }/>
      <Route  path="/Profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
