// object destructuring
import React, { Component } from 'react';
// Alias
import Pizza from './components/Pizza.js'

// function App() {
//   return (
//     <div className="App">
//       <h1>My first react app</h1>
//     </div>
//   );
// }

// Class based components 
// inheritence 
class App extends Component{

  state = {
        // pizzaPlaces: []
        dynamicName: "Pizza Hunter", 
        // brand: "Pizza",
        // description: "best pizza in town"
        pizzaPlaces: [
          { name: "Pizza Hut", description: "Best Pizza", id: 1}, 
          { name: "Dominoes", description: "Best Pizza in town", id: 2}, 
          { name: "Papa Johns", description: "Pizza place", id: 3}, 
          { name: "Ovenbricks", description: "authentic pizza", id: 4},
          { name: "Ovenbricks", description: "authentic pizza", id: 5},
          { name: "Ovenbricks", description: "authentic pizza", id: 6},
        ]
    }
  
  deleteCard = (id) => {
        console.log(id);
        // this.state.dynamicName // don't change the state directly
        let pizzaPlaces = this.state.pizzaPlaces.filter( (pizzaPlace) => {
          return pizzaPlace.id !== id
        } )
        this.setState({
            pizzaPlaces: pizzaPlaces
        })
    }

  render(){
    return(
      <div>
        <h1>{this.state.dynamicName}</h1>        
        {/* <Pizza brand={this.state.pizzaPlaces[3].name} description={this.state.pizzaPlaces[2].description}></Pizza> */}
        <Pizza pizzaPlaces={this.state.pizzaPlaces} deleteCard={this.deleteCard}></Pizza>    
        {/* <Pizza></Pizza> */}
      </div>

      
    )
  }

}

// ES6 
export default App;
