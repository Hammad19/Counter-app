import React from 'react';

function Dinner(props){
    return (
        <div>
            <h1>today We are Serving {props.dishname}</h1>
            <h1>with Dessert {props.sweetdish}</h1>
        </div>)
}

export default Dinner;