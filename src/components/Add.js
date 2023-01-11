
import '../App.css';
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
        console.log(newEvent)
      }

    const handleSubmit = (event) => {
        console.log(newEvent)
        event.preventDefault()
        props.handleCreate(newEvent)
        setNewEvent(emptyEvent)
    }
      

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name of Event:</label>
            <br />
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="picture">Picture:</label>
            <br />
            <input type="text" name="picture" onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="street">Street Address:</label>
            <br />
            <input type="text" name="street" onChange={handleChange}  />
            <br />
            <br />
            <label htmlFor="city">City:</label>
            <br />
            <input type="text" name="city" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="city">State:</label>
            <br />
            <input type="text" name="state" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="zip">Zipcode:</label>
            <br />
            <input type="text" name="zip" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="date">Date of Event:</label>
            <br />
            <input type="date" name="date" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="time">Time of Event:</label>
            <br />
            <input type="time" name="time" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <textarea name="description" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="name">Link to Event:</label>
            <br />
            <input type="text" name="link" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="name">Dog Friendly?</label>
            <br />
            <input type="checkbox" name="dog_friendly" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="name">Outdoor?</label>
            <br />
            <input type="checkbox" name="outdoor" onChange={handleChange} />
            <br />
            <br />
            <input type="submit" value="Submit" onChange={handleChange} />
        </form>
    </>
  );
}

export default Add;
