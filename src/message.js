import React from 'react';
import './App.css';
export function Message(props){
    return (
        <div>
            <h3 className="colr">Value Of Counter Variable is {props.count}</h3>
        </div>
    )
}