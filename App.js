import React, { useEffect, useState} from 'react';
import './App.css';
function App(){
  const [num,setNum]=useState(0);
  const [nums,setNums]=useState(0);
  useEffect(()=>{
    alert('you clicked me')
  },[num])
  const increm=()=>{
    setNum(num+1)
  }
  const increms=()=>{
    setNums(nums+1)
  }
  return (
    <>
    <button onClick={increm}>Click Me {num}</button><br/>
    <button onClick={increms}>Click Me {nums}</button>
    </>
  )
}



export default App;
