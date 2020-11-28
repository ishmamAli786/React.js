import React, { useState } from 'react';
import {Message} from './message';
import './App.css';
function App() {
  const [count,setCount]=useState(0);
  const [isMorning, setMorning] = useState(false);
  return (
    <div className={`App ${isMorning ? 'day-light' :'day-night'}`}>
    <h1>Day Time ={isMorning ? 'Morning': 'Night'}</h1>
    <Message count={count}/>
    <button onClick={()=>setCount(count +1)} className="btn">Increment</button>
      <button onClick={() => setCount(count - 1)} className="btn">Decrement</button>
      <button onClick={() => setMorning(!isMorning)} className="btn">Update Day</button>
    </div>
  );
}

export default App;
