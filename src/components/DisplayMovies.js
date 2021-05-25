import React, { useContext, useEffect, useState } from 'react';
import { SoccerContext } from '../Context';
import TopMovies from './TopMovies';
import SingleMovie from './SingleMovie';


function DisplayMovies(props) {
    const {searchedMovies, search, handleChange} = useContext(SoccerContext)
  
    const [load, setload] = useState(false)

    useEffect(()=>{
       if(searchedMovies.length === 0){
        setTimeout(()=>{
            setload(true)
        }, 4000)
       }else{
           setload(false)
       }

    }, [searchedMovies])




 
    return (
        <div className="Home">
          <input 
            value={search}
            onChange={handleChange}
            placeholder='Search for a movie'
        />

        {
            search.length > 0 ?  <div>{
            searchedMovies.length   === 0 ? <div className="not-found">{load ? <p>Nothing Found</p> : <img src={require('../45.gif')}/>}</div> 
            : 
                <div className="movies-grid">
                    {
                           searchedMovies.map((movie, index)=>{
                 
                            return <SingleMovie key={index} movie={movie}/>
                            
                           
                        })
                    }
                </div>
            }</div> 
            :
            <TopMovies/>
        }
       
         
      
            
        </div>

     
    ); 
}

export default DisplayMovies;
 
//loading
//cleanup
//not found
//page not found
//top rated


