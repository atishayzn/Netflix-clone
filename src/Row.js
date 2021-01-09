import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";
import './Row.css'; 
//import movieTrailer from 'movie-trailer'
import youtube from './youtube';
const base_url='https://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    

    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(fetchUrl); 
            setMovies(request.data.results)
            return request; 
        };
        fetchData();
    }, [fetchUrl]);

    const opts = {
     height: '390',
     width: '100%',
     playerVars: {
     autoplay: 1,
     },
    };
    const handleClick  = async (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            const response = await youtube.get('/search',{
                params:{
                    q:movie?.name || movie?.original_title
                }
            })
            //console.log(response.data.items[0].id)
            setTrailerUrl(response.data.items[0].id.videoId);
            
            //movieTrailer(movie?.name || movie?.original_title)
            //.then(url => {
                //console.log(url)
              //   const urlParams=new URLSearchParams(new URL(url).search);
                // console.log(urlParams.get('v'))
                 //setTrailerUrl(urlParams.get('v'));
            //}
            //).catch((error) => {console.log(error)});
        }
    }

   
    return (
        <div className='row'>
             <h1>{title}</h1>
             <div className='row_posters'>
             {movies.map(movie =>(
                 <img 
                 key={movie.id}
                 onClick={() => handleClick(movie)}
                 className ={'row_poster '+(isLargeRow && "row_posterLarge")} 
                src={base_url+(isLargeRow ? movie.poster_path : movie.backdrop_path)}
                alt={movie.name}/>
             ))}
             </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
        </div>
    );
}
export default Row