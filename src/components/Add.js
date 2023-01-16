
import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Add(props) {
    let emptyEvent = {name: '', street: '', city: props.city, state: props.state, zip: '', outdoor: false, date: '', time: '', description: '', link: '', dog_friendly: false, submitted_by: props.myUser.username}
    const [newEvent, setNewEvent] = useState(emptyEvent)
   

    // const usStates = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]

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
    <div className='add-form-modal'>
    <div className='add-form-container'>
      <p className='x-event' onClick={props.addFormToggle}>x</p>
    <h1 >ADD AN EVENT</h1>
        <form className ="add-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="name">Name of Event:</label>
              <br />
              <input className='form-control' type="text" name="name" onChange={handleChange} />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="picture">Picture:</label>
              <br />
              <input className='form-control' type="text" name="picture" onChange={handleChange}/>
            </div>
            <br />
            <div className='form-group'>
            <label htmlFor="street">Street Address:</label>
            <br />
            <input className='form-control' type="text" name="street" onChange={handleChange}  />
            </div>
            <br />
            
              <div className='location-row'>
                <label htmlFor="zip">Zipcode:</label>
                <br />
                <input className='form-control' type="text" name="zip" onChange={handleChange} />
              </div>
            
            <br />
            <div className='form-group city-state-zip'>
              <div className='location-row'>
              <label htmlFor="date">Date of Event:</label>
              <br />
              <input className='form-control time-event' type="date" name="date" onChange={handleChange} />
              </div>
              <br />
              <div className='location-row'>
              <label htmlFor="time">Time of Event:</label>
              <br />
              <input className="form-control time-event" type="time" name="time" onChange={handleChange} />
              </div>
            </div>
            <br />
            <div className='form-group description-div'>
            <label htmlFor="description">Description:</label>
            <br />
            <textarea className='form-control' name="description" onChange={handleChange} />
            <br />
            <label htmlFor="name">Link to Event:</label>
            <br />
            <input className="form-control" type="text" name="link" onChange={handleChange} />
            </div>
            <br />
            <div className='form-group check-box-div'>
              <div className='check-group'>
                <label htmlFor="name">Dog Friendly?</label>
                <input className ="check-control" type="checkbox" name="dog_friendly" onChange={handleChange} />
              </div>
              <div className='check-group'>
                <label htmlFor="name">Outdoor?</label>
                <input type="checkbox" name="outdoor" onChange={handleChange} />
              </div>
            </div>
            <br />
            <input className="btn btn-secondary submit-btn" type="submit" value="Submit" onChange={handleChange} />
        </form>
        </div>
        </div>
    </>
  );
}

export default Add;
