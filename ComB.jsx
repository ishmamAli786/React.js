import React,{useContext} from 'react';
import ComC from './ComC';
import {Fname,Lname} from './App';
const ComB=()=>{
    const fname=useContext(Fname)
    const lname=useContext(Lname)
return(
<h1>My name is {fname} {lname}</h1>
    ) 
}
export default ComB;