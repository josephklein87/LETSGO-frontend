import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Mainpage(props) {

    

    return(
    <>
    <div className='header-container'>
        <h1 className='mainpage-header'>THINGS TO DO IN</h1>
        <h1 className='city-header'>{props.city.toUpperCase()}</h1>
    </div>
    <div className='events-container'>
        {props.events.map((event => { 
            return (
            <>
                <div className="event-frontpage-container" style={{background: `linear-gradient(
                rgba(0, 0, 0, 0.2), 
                rgba(0, 0, 0, 0.2)
                ), url(${event.picture})`}}>
                <h2 className='tile-time'>{props.timeConverter(event.time)}</h2>
                <h2 className='tile-header'>{event.name}</h2>
                </div>
            </>
            )
        }))}
      </div>
    </>
    )

}


export default Mainpage
