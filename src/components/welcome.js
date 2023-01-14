import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import apple from '../pictures/apple.png'
import palmtree from '../pictures/palmtree.png'
import bull from '../pictures/bull.png'

function Welcome(props) {

    const goToNewYork= () => {
            props.setCity("New York")
            props.setState("NY")
            props.setPageState("mainpage")
    }

    const goToLA = () => {
            props.setCity("Los Angeles")
            props.setState("CA")
            props.setPageState("mainpage")
    }
    
    const goToChicago = () => {
        props.setCity("Chicago")
        props.setState("IL")
        props.setPageState("mainpage")
}

    return(
        <>
        <div className='welcome-container'>
            <div className='left-div'>
                <h1 className='welcome-header'>LETS</h1>
                <h4 className='find-things'>FIND SOMETHING FUN</h4>
            </div>
            <div className='right-div'>
                <h1 className={props.goState}>GO</h1>
                <div className='locations-div'>
                    <div className='location-item location-new-york' name="new-york" onClick={goToNewYork}>
                        <img className='location-icon apple' src={apple} />   
                        <p className='location-name new-york'>NEW YORK</p>
                    </div>
                    <div className='location-item location-los-angeles' name="los-angeles" onClick={goToLA}>
                        <img className='location-icon palmtree' src={palmtree} />   
                        <p className='location-name los-angeles'>LOS ANGELES</p>
                    </div>
                    <div className='location-item location-chicago' name="chicago" onClick={goToChicago}>
                        <img className='location-icon bull' src={bull} />   
                        <p className='location-name chicago'>CHICAGO</p>
                    </div>
               
                </div>
            </div>
        </div>
        </>
        
    )

}

export default Welcome