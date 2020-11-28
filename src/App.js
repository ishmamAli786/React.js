import React from 'react';
import './App.css';
import Dinner from './dinner';
function App() {
  return (
    <div className="App">
    <Dinner dishName="chipli kabab" sweetDish="sohan halwa" /><br></br>
      <Dinner dishName="Birayni" sweetDish="Jaleebi" /><br></br>
      <Dinner dishName="nan" sweetDish="Gajar Ka Halwa" />
    </div>
  );
}

export default App;
