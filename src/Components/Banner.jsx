import React, { useEffect, useState } from 'react'
import request from '../request'
import instance from "../axios";

import '../StyledComponents/Banner.css'


const Banner = () => {
const [movie,setmovies]=useState([])

useEffect(()=>{
const FetchData=async()=>{
    const values = await instance.get(request.fetchNetflixOriginals);
console.log(values.data.results[Math.floor(Math.random()*values.data.results.length-1)])
setmovies(values.data.results[Math.floor(Math.random()*values.data.results.length-1)])
return values;
}
FetchData()
},[])




  return (
    // below the div we will give the background image
   <div className="banner"
   style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center"

    

}}
   
   
   
   
   >
    <div className="banner__contents">

        {/* title */}
        <h1>{movie?.title || movie?.name} || {movie?.original_name}</h1>
        {/* div > 2 buttons  */}
        <div className="banner__buttons">
            <button className="banner__button1">PLAY</button>
            <button className="banner__button">MY LIST</button>
        </div>
        {/*description  */}
        <h2 className='banner__description'>{movie?.overview}</h2>
    
    </div>



    <div className="banner_fadeBottom"/>
   </div>
  )
}

export default Banner