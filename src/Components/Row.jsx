import React, { useEffect, useState } from "react";
import instance from "../axios";
import "../StyledComponents/Row.css";

import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

const basurlss = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);

  const [trailerUrl,settrailerUrl]=useState('')

  // a snippedt of code which rusn based on a specific condition
  useEffect(() => {
    // if [],run once when the row loads and dont run again

    const DataFetching = async () => {
      const request = await instance.get(fetchUrl);
      // console.log(request.data.results);

      setmovies(request.data.results);
      return request;
    };
    DataFetching();
  }, [fetchUrl]);





  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }




  // when we click the image we get the tralier
  // const handleclick=(movie)=>{
  //   if(trailerUrl){

  //     settrailerUrl('')
  //   }else{
  //     movieTrailer(movie?.name || "").then(url=>{
  //       const urlParams=new URLSearchParams(new URL(url).search)
  //       settrailerUrl(urlParams.get('v'))

  //     })
  //     .catch((err)=>console.log(err))
  //   }
  // }

  const handleclick = async (movie) => {
    try {
      if (trailerUrl) {
        settrailerUrl('');
      } else {
        const url = await movieTrailer(movie?.name || "");
        const urlParams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get('v'));
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="row">
      {/* title */}
     <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster */}
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="div1">
              {/* <img

              onClick={()=>handleclick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          
                 src={`${basurlss}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
                alt={movie.name}
  style={{marginLeft:"10px"}}
              /> */}.
              <img
  onClick={() => handleclick(movie)}
  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
  src={`${basurlss}${
    isLargeRow ? movie.poster_path : movie.backdrop_path
  }`}
  alt={movie.name}
  style={{ marginLeft: "10px" }}
/>

             
            </div>
          );
        })}
      </div>
{/* <Youtube videoId={trailerUrl} opts={opts}/> */}
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }


      {/*  container =>poster*/}
    </div>
  );
};

export default Row;
