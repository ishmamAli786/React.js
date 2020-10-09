import React, { useEffect, useState} from 'react';
import './App.css';
function App(){
  const [num,setNum]=useState(0);
  useEffect(()=>{
    document.title=`You click Me ${num} Time`
  },[num])
  const increm=()=>{
    setNum(num+1)
  }
  return (
    <>
    <button onClick={increm}>Click Me {num}</button><br/>
    </>
  )
}



export default App;
