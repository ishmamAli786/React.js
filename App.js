import React, { createContext } from 'react';
import './App.css';
import ComA from './ComA';
const Fname=createContext();
const Lname=createContext();
function App(){
  return (
    <>
    <Fname.Provider value={'ishmam'}>
      <Lname.Provider value={'ali'}>
    <ComA/>
    </Lname.Provider>
    </Fname.Provider>
    </>
  )
}



export default App;
export {Fname,Lname};
