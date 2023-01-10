
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Add(props) {
    let emptyEvent = {name: '', street: '', city: '', state: '', zip: '', outdoor: false, date: '', time: '', description: '', link: '', dog_friendly: false}
    const [newEvent, setNewEvent] = useState({emptyEvent})

    const handleChange = (event) => {
        if (event.target.type !== "checkbox") {
        setNewEvent({ ...newEvent, [event.target.name]: event.target.value})
        } else {
        setNewEvent({ ...newEvent, [event.target.name]: event.target.checked})  
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }
      

  return (
    <>
        <form>
            <input type="text" name="name" />
            <input type="text" name="street" />
            <input type="text" name="city" />
            <input type="text" name="zip" />
            <input type="date" name="date" />
            <input type="time" name="time" />
            <input type="text" name="description" />
            <input type="text" name="link" />
            <input type="checkbox" name="dog_friendly" />
            <input type="checkbox" name="outdoor" />
            <input type="submit" value="Submit" />
        </form>
    </>
  );
}

export default Add;
