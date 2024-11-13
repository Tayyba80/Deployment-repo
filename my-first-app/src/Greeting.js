import React from 'react';
import './Styling/Greeting.css'
function Greeting(props) {
    return <h1 className='greeting'>Hello,{props.name} welcome to my React App!</h1>;
    }
export default Greeting