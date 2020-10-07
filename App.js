import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'
function App() {
  const [input,setInput]=useState("")
  const [list,setList]=useState([])
  const itemEvent=(event)=>{
    setInput(event.target.value)
  }
  const listOfItem=()=>{
    setList((oldItems)=>{
      return [...oldItems,input]
    });
    setInput('')
  }
  const delItems=(id)=>{
    setList((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !==id;
      })
    })
    }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder="add items" value={input} onChange={itemEvent}/>
        <button onClick={listOfItem}>+</button>

        <ol>
       { list.map((itemval,index)=>{
          // return   <li>{itemval}</li>
         return <ToDoList key={index} id={index} onSelect={delItems} text={itemval}/>
        })}
        </ol>
      </div>
    </div>
    </>
  )}

export default App;
 