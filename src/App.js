import React,{useState} from 'react';
const App =()=>{
  const purple = '#8e44ad';
 const [bg,setBg]=useState(purple);
 const [name,setName]=useState('Click Me')
  const bgChange=()=>{
    // console.log('clicked');
    const newBg='red';
    setBg(newBg);
    setName('ouch!!');
  }
  return(
    <>
    <div className="center" style={{backgroundColor:'bg'}}>
      <button onClick={bgChange}>{name}</button>
    </div>
    </>
  );
}
export default App;