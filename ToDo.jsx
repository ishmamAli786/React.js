import React from 'react';
function ToDo(props){
    return(
        <>
        <div className="todo-style">
            <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id)
            }}></i>
         <li>{props.text}
           </li>
           </div>
        </>
    )
}
export default ToDo;