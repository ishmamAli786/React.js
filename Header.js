import React from 'react';
const Header=(props)=>{
    console.log(props)
    return(
        <>
        <h1>Header PaGe</h1>
        <button onClick={props.get_props('saylani')}>Send Props</button>
        </>
    )
}
export default Header;