import './App.css';
import axios from 'axios';
import React, {Component} from 'react';

class App extends Component{
  state={
    avengers : []
  }

  handleClick = () => {
      axios.get('http://localhost:3001/api/avengers').then(avengers => {
        console.log(avengers);
        this.setState({
          avengers: avengers.data
        })
      }).catch(error => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        <h1>Avengers List</h1>
        <button onClick={this.handleClick}>Get data</button>
      </div> 
    )
  }
}

export default App;
