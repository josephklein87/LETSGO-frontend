import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Edit from './editform';

function Mainpage(props) {

    let [modal, setModal] = useState({})
    let [showModal, setShowModal] = useState(false)
    let [showEditForm, setShowEditForm] = useState(false)

    const datePicker = (e) => {
        let dateObj = {
            city1: props.city,
            state1: props.state,
            date1: e.target.value
        }
        axios.put('http://localhost:3000/events/date', dateObj).then(res => {
            props.setEvents(res.data)
        })
    }

    const clear = e => {
        e.preventDefault()
        document.querySelector(".date-picker").value = null;
        props.getEvents()
    }

    const openModal=(eventID)=>{
        axios.get('http://localhost:3000/events/' + eventID ).then((res) => {
            setModal(res.data[0])
            setShowModal(true)
        })
    }

    const toggleEdit = () => {
        setShowEditForm(!showEditForm)
        setShowModal(!showModal)
    }

    const dateConverter = (thisDate) => {
        let sliceDate = thisDate.slice(0, 10)
        let dateArray = sliceDate.split('-')
        let month = dateArray[1]
        let day = dateArray[2]
        let year = dateArray[0]

        return(
            `${month}/${day}/${year}`
        )
    }

    const deleteEvent = (eventID) => {
        axios.delete('http://localhost:3000/events/' + eventID).then(req => {
            props.getEvents()
            setShowModal(false)
        }

        )
    }

    return(
    <>
    <div className='header-container'>
        {props.pageState === "mainpage" ?
        <>
        <h1 className='mainpage-header'>THINGS TO DO IN</h1>
        <h1 className='city-header'>{props.city.toUpperCase()}</h1>
            <div className='date-div'>
                <input className='date-picker form-control' type="date" onChange={datePicker}></input>
                <button className='btn btn-danger reset-btn' onClick={clear}>RESET</button>
            </div>
        </>
        : null }
        {props.pageState === "my-events" && props.myUser.username ?
        <>
            <h1 className='mainpage-header'>USER PAGE</h1>
            <h1 className='city-header'>{props.myUser.username.toUpperCase()}</h1>
        </>
        : null
        }
    </div>

    {props.pageState === "my-events" && props.myUser.username ?
        <h4 className='my-submitted'>MY SUBMITTED EVENTS</h4> : 
        null
    }
    <div className='events-container'>
        {props.events.map((event => { 
            return (
            <>
                <div className="event-frontpage-container" style={{background: `linear-gradient(
                rgba(0, 0, 0, 0.2), 
                rgba(0, 0, 0, 0.2)
                ), url(${event.picture})`}} onClick={()=>{openModal(event.id)}}>
                <div className='tile-flex'>
                    <div className='top-section'>
                        <h2 className='tile-date'>{dateConverter(event.date)}</h2>
                    </div>
                    <div className='bottom-section'>
                        <h2 className='tile-time'>{props.timeConverter(event.time)}</h2>
                        <h2 className='tile-header'>{event.name}</h2>
                    </div>
                </div>
                </div>
            </>
            )
        }))}
      </div>

    {showModal ? 
    <>
    <div className='event-modal'>
        <div className='event-modal-container'>
            <p className='x-event' onClick={()=>{setShowModal(false)}}>x</p>
            <img src={modal.picture} />
            <h1>{modal.name}</h1>
            {modal.submitted_by ?
            <p>Submitted by: {modal.submitted_by}</p> : null}
            <p>{dateConverter(modal.date)}</p>
            <p>{props.timeConverter(modal.time)}</p>
            <p className='address'>{modal.street}</p>
            <p className='address'>{modal.city}, {modal.state} {modal.zip}</p>
            <p className='description'>{modal.description}</p>
            <a href={modal.link}>LINK TO EVENT</a>
            <br />
            <div className='button-div'>
            
            {modal.submitted_by === props.myUser.username ?
            <>
            <button className='btn' onClick={toggleEdit}>EDIT</button> <button className='btn' onClick={()=>{deleteEvent(modal.id)}}>DELETE</button>
            </>
            :
            null }

            </div>
        </div>
    </div>
    </>
    :
    null
    }
    {showEditForm ? 
    <Edit dateConverter={dateConverter} toggleEdit={toggleEdit} setModal={setModal} setShowModal={setShowModal} modal={modal}/>
    :
    null
    }
    </>
    )

}


export default Mainpage
