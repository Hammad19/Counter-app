import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js'
function App() {

  let[count,setCount] = useState(1)
  let[ismorning,setmorning] = useState(false)
  return (
   <div className ={`box ${ismorning ? 'daylight': ''}`}>
     <h1>Daytime  : {ismorning? 'Morning': 'Night'}</h1>
     <Message counter = {count} />
     <button onClick ={

       ()=> setCount(++count)
       }>Update Counter
       </button>
     <button onClick ={()=> setCount(0)}>Reset Counter</button>
     <button onClick ={()=> setmorning(!ismorning)}>Update Day</button>
   </div> 
   
    
  );
}

export default App;
