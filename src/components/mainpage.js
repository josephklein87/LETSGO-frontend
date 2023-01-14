import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Mainpage(props) {

    let [modal, setModal] = useState({})
    let [showModal, setShowModal] = useState(false)

    const openModal=(eventID)=>{
        axios.get('http://localhost:3000/events/' + eventID ).then((res) => {
            setModal(res.data[0])
            setShowModal(true)
        })
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

    return(
    <>
    <div className='header-container'>
        {props.pageState === "mainpage" ?
        <>
        <h1 className='mainpage-header'>THINGS TO DO IN</h1>
        <h1 className='city-header'>{props.city.toUpperCase()}</h1>
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
        <h4>MY SUBMITTED EVENTS</h4> : 
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
                <h2 className='tile-time'>{props.timeConverter(event.time)}</h2>
                <h2 className='tile-header'>{event.name}</h2>
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
            <p>{dateConverter(modal.date)}</p>
            <p>{props.timeConverter(modal.time)}</p>
            <p className='address'>{modal.street}</p>
            <p className='address'>{modal.city}, {modal.state} {modal.zip}</p>
            <p className='description'>{modal.description}</p>
            <a href={modal.link}>LINK TO EVENT</a>
        </div>
    </div>
    </>
    :
    null
    }
    </>
    )

}


export default Mainpage
