import React, { createContext } from 'react';
import './App.css';
import ComA from './ComA';
const Fname=createContext();
const Lname=createContext();
function App(){
  return (
    <>
    <Fname.Provider value={'ali'}>
      <Lname.Provider value={'khan'}>
    <ComA/>
    </Lname.Provider>
    </Fname.Provider>
    </>
  )
}



export default App;
export {Fname,Lname};
