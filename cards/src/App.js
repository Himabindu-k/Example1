import React from 'react';
import './App.css';
import Card from "./Components/Card";
//import Img from "./Img.jpg";

 
function App ()  {
    return (
        <div className='App'>
            <center>
            <Card
            title='Card Title'
            imageurl='https://media.istockphoto.com/photos/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office-picture-id1354842602'
           
            body='lorem dolor dfffo'
            />
            </center>
        </div>
    )
}
export default App

