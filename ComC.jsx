import React from 'react';
import {Fname,Lname} from './App';
const ComC=()=>{
    return(
    <>
    <Fname.Consumer>
        {(fname)=>{
        return (
            <Lname.Consumer>
                {(lname)=>{
                   return <h1>My Name is {fname} {lname}</h1>
                }}
            </Lname.Consumer>
        )
    }}</Fname.Consumer>
    </>
) ;};
export default ComC;