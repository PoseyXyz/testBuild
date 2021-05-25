import React, { Component } from 'react';
import DisplayMovies from './components/DisplayMovies';
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={DisplayMovies}/>
          <Route exact path='/details/:title' component={DetailsPage}/>
        </Switch>
  
      </div>
      
    );
  }
}

export default App;







/*class App extends Component {
  state={
    contacts:[],
    center:{
      lat:'',
      lng:''
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        contacts:data
      })
    })
  } 

  componentDidMount(){
      this.getCoordinates()
    this.interval=setInterval(this.getCoordinates, 3000)


  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  getCoordinates=()=>{
        
const ISS_URL = "http://api.open-notify.org/iss-now.json"
fetch(ISS_URL)
.then(res=>res.json())
.then(data=>this.setState({
  center:{
    lat: data.iss_position.latitude,
    lng: data.iss_position.longitude
  }
}))
  }



  render() {

  

    
    return (
      <>
          <div className = "map" style={{ height: '100vh', width: '80%' }}>

</div>
      </>



    );
  }
}

export default App;
*/