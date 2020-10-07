import React,{useState} from 'react';
import './App.css';
function App(){
  const [incre,setincre]=useState(0)
  const increment=()=>{
    setincre(incre+1)
  }
  const decrement=()=>{
    if(incre>0){
    setincre(incre-1)
  }else{
    setincre(0);
    alert('Sorry Zero Limit Reach')
  }
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div"><br/><br/><br/><br/><br/>
  <h1>{incre}</h1><br/><br/><br/>
        <div className="increments">
        <button className="increm" onClick={increment}>Increm</button>
        <button className="increm" onClick={decrement}>Decrem</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default App;
 