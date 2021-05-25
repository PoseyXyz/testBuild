import React, {useContext } from 'react';
import { SoccerContext } from '../Context';
import { Link } from 'react-router-dom';
import SingleMovie from './SingleMovie';

function TopMovies(props) {
    const {scheduled} = useContext(SoccerContext)
    return (<div className="top">
        <p className="top-picks">Top Picks</p>
        <div className="movies-grid">
            {scheduled.map((movie, index)=>{
         return <SingleMovie key={index} movie={movie}/> 
     })}
        </div>
    </div>
        
    );
}

export default TopMovies;