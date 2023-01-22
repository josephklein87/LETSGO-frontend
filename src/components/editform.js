import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Edit(props) {
    let currentEvent = props.modal
    const [newEvent, setNewEvent] = useState(currentEvent)
   

    const usStates = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]

    const handleChange = (event) => {
        if (event.target.type !== "checkbox") {
        setNewEvent({ ...newEvent, [event.target.name]: event.target.value})
        } else {
        setNewEvent({ ...newEvent, [event.target.name]: event.target.checked})  
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put('https://afternoon-lake-04423.herokuapp.com/events/' + props.modal.id, newEvent).then(res=>{
            props.setModal(res.data[0])
            // props.setShowModal(true)
            props.toggleEdit()
            props.getEvents()
        })
    }




  return (
    <>
    <div className='add-form-modal'>
    <div className='add-form-container'>
      <p className='x-event' onClick={props.toggleEdit}>x</p>
    <h1 >EDIT YOUR EVENT</h1>
        <form className ="add-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="name">Name of Event:</label>
              <br />
              <input className='form-control' type="text" name="name" defaultValue={props.modal.name} onChange={handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor="picture">Picture:</label>
              <br />
              <input className='form-control' type="text" name="picture" defaultValue={props.modal.picture} onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <label htmlFor="street">Street Address:</label>
            <br />
            <input className='form-control' type="text" name="street" defaultValue={props.modal.street} onChange={handleChange}  />
            </div>
              <div className='location-row'>
                <label htmlFor="zip">Zipcode:</label>
                <br />
                <input className='form-control' type="text" name="zip" defaultValue={props.modal.zip}onChange={handleChange} />
              </div>
            <div className='form-group city-state-zip'>
              <div className='location-row'>
              <label htmlFor="date">Date of Event:</label>
              <br />
              <input className='form-control time-event' type="date" name="date" defaultValue={props.modal.date.slice(0,10)} onChange={handleChange} />
              </div>
              <br />
              <div className='location-row'>
              <label htmlFor="time">Time of Event:</label>
              <br />
              <input className="form-control time-event" type="time" name="time" defaultValue={props.modal.time} onChange={handleChange} />
              </div>
            </div>
            <div className='form-group description-div'>
            <label htmlFor="description">Description:</label>
            <br />
            <textarea className='form-control' name="description" defaultValue={props.modal.description} onChange={handleChange} />
            <label htmlFor="name">Link to Event:</label>
            <br />
            <input className="form-control" type="text" name="link" defaultValue={props.modal.link} onChange={handleChange} />
            </div>
            <div className='form-group check-box-div'>
              <div className='check-group'>
                <label htmlFor="name">Dog Friendly?</label>
                <input className ="check-control" type="checkbox" name="dog_friendly" defaultChecked={props.modal.dog_friendly} onChange={handleChange} />
              </div>
              <div className='check-group'>
                <label htmlFor="name">Outdoor?</label>
                <input type="checkbox" name="outdoor" defaultChecked={props.modal.outdoor} onChange={handleChange} />
              </div>
            </div>
        
            <input className="btn btn-secondary submit-btn" type="submit" value="Submit" onChange={handleChange} />
        </form>
        </div>
        </div>
    </>
  );
}

export default Edit;