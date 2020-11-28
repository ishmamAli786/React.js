import React from 'react';


function Dinner(props){
    return(
        <>
        <h1>Today We Are Serving {props.dishName}</h1>
            <h1>Today We Are Also Serving Sweet Dishes {props.sweetDish}</h1>
        </>
    )
}
export default Dinner;