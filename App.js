import React,{useState} from 'react';
import './App.css';
import ToDo from './ToDo';
function App(){
  const [inputList,setInputList]=useState('')
  const[items,setItems]=useState([])
  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }
  const listOfItem=(event)=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList('');
  }
  const deleteItems=(id)=>{
    console.log('deleted')
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      })
    })
 }
  return (
    <>
    <div className="main_div">
      <div className="center_div"><br/>
      <h1>ToDo List</h1><br/>
      <input type="text" placeholder="Add items" value={inputList}onChange={itemEvent}/>
      <button onClick={listOfItem}>+</button>
      <ol>
         {/* <li>{inputList}</li> */}
        { items.map((itemVal,ind)=>{
           return <ToDo key={ind} id={ind} text={itemVal} onSelect={deleteItems}/>
         })}
      </ol>
      </div>
    </div>
    </>
  )
}
export default App;
 