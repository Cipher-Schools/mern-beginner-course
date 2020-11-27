import React, { Component } from 'react';
// Alias
import Pizza from './Pizza.js'

// function App() {
//   return (
//     <div className="App">
//       <h1>My first react app</h1>
//     </div>
//   );
// }

// Class based components
class App extends Component{

  render(){
    let dynamicName='React is mind blowing'
    let brand = "PizzaHut"
    let description = "Best pizza in town!!"
    let brand2 = "Dominoes"
    let description2 = "Better than the best Pizza"
    return(
      <div>
        <h1>{dynamicName}</h1>
        <Pizza brand={brand} description={description}></Pizza>
        <Pizza brand={brand2} description={description2}></Pizza>
      </div>
      
    )
  }

}

// ES6 
export default App;
