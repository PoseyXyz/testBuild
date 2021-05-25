import React from 'react';
import {Link} from 'react-router-dom'
function SingleMovie({movie}) {
   const {show} = movie
        return (

          <>
            {movie.show.image === null ?  <div style={{display:'none'}}></div> 
            :
            <div className="single-movie-box">
            <img src ={show.image ? show.image.medium: ''} alt='Not Found'/>
            <div className="details">
          <p className="name">{show.name}</p>
       
           
     <Link to={`/details/${show.name}`}>
            
         <button className="details-link">Details</button>
         
     </Link>
     </div>
        
    
        </div>
            }
          </>
           
        );
    
}

export default SingleMovie;