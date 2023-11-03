import { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import { API_KEY , imageURL} from '../../constants/constants';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlid,setUrlId] = useState('')
  useEffect(() =>{
    axios.get(props.url).then(Response=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(err=>{
      // alert('network error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(Response=>{
      console.log(Response,'++++++++');
     if(Response.data.results.length!==0){
      setUrlId(Response.data.results[0])
     }else{
      console.log('array empty')
     }
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((obj)=>
         <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter" : "poster"} src={`${imageURL + obj.backdrop_path}`} alt="poster"/>
)}
        </div>
        {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default RowPost