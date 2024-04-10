import React from 'react'
import Topmovies from './Topmovies'
import Navbar from './Navbar'
import Topshow from './Topshow'
import Trending from './Trending'
import Intropage from './Intropage'
import Buttonsintro from './Buttonsintro'
import Ratedtv from './Ratedtv'
 

const Home = ({topmovies,topshows,settings,trendings,ratedtvs,handleSearch}) => {
  return (
    <div>
    <Navbar handleSearch={handleSearch} />
    <Intropage />
    <Buttonsintro />
    <Trending trendings={trendings}  settings={settings}/>
    <Topmovies  topmovies={topmovies} settings={settings} />
    <Topshow  topshows={topshows}  settings={settings} />
    <Ratedtv ratedtvs={ratedtvs} settings={settings}/>
    <Trending trendings={trendings}  settings={settings}/>
    <Topmovies  topmovies={topmovies} settings={settings} />
    <Topshow  topshows={topshows}  settings={settings} />
    <Topshow  topshows={topshows}  settings={settings} />
    <Ratedtv ratedtvs={ratedtvs} settings={settings}/>
    <Trending trendings={trendings}  settings={settings}/>
    <Topmovies  topmovies={topmovies} settings={settings} />
    
</div>
  )
}

export default Home