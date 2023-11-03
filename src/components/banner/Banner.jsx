import { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import { API_KEY } from '../../constants/constants';
import { imageURL } from '../../constants/constants';


function Banner() {
 const [movie, setmovie] = useState()
  useEffect(()=>{
   axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`).then((Response)=>{
    // console.log(Response.data.results[0]);
    console.log(Response.data.results.length)
    const number = Math.floor(Math.random()* Response.data.results.length)
    setmovie(Response.data.results[number])
   })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path :''})`}}
    className="banner">
        <div className="content">
            <h1 className="title">{movie ? movie.title : ''}</h1>
            <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottum"></div>
    </div>
  )
}

export default Banner