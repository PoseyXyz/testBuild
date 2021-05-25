import React, { Component } from 'react';
import { SoccerConsumer } from '../Context';

class DetailsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.title
        }
    }
    render() {
        return (
            <SoccerConsumer>
                {value=>{
                    const {showDetails} = value
                    const movie = showDetails(this.state.id)

                    if(!movie){
                        return <div>The resource you requested for couldn't be retreived</div>
                    }
            
                        const {show} = movie
                        const summary = show.summary
                    return <div className="details-page">
                              <img src={show.image === null ? '' : show.image.original} alt='Not Found'/>
                        <div className="container">
                    
                                <h3 className="name">{show.name}</h3> 
                    
               <div className="summary">
                
                <span>{summary.replace(/<\/?[^>]+>/gi, '')}</span>
               </div>
                        <div className="language">
                            <p>Language:</p>
                            <span>{show.language}</span>
                        </div>

                        <div className="release">
                            <p>Release Date:</p>
                            <span>{show.premiered}</span>
                        </div>
                <div className="runtime">
                    <p>Runtime:</p>
                    <span>{show.runtime} minutes</span>
                </div>
                <div className="network">
                    <p>Network:</p>
                <span>{show.network? show.network.name : 'null'}</span>

                </div>              
               
               <div className="genres">
                <p>Genres:</p>
               {show.genres.map((genre, index)=>
                    <span key={index}>{genre}</span>
                )}
               </div>          
                        </div>                   
                        </div>
                }}
            </SoccerConsumer>
                
            
        );
    }
}

export default DetailsPage;

//regex