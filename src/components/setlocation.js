import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function SetLocation(props) {
    const usStates = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]
    
    const handleChange = (e) => {
        if(e.target.name === "state") {
            props.setState(e.target.value)
            console.log(props.state)
        } else if (e.target.name === "city") {
            props.setCity(e.target.value)
            console.log(props.city)
        } else if (e.target.name === "date") {
            props.setDate(e.target.value)
            console.log(props.date)
        }

    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        props.setPageState("mainpage")
        console.log(props.state)
    }


    return (
        <>
        <form className='set-up-form' onSubmit={handleSubmit}>
            <p>What city are you looking for things to do in?</p>
            <input type="text" className='form-control' name="city" onChange={handleChange}/>
            <p>What state is that city in?</p>
            <select className='form-control' type="text" name="state" onChange={handleChange} >
                  <option value="" selected disabled style={{color: "grey"}} >Choose state below</option>
                  {usStates.map((state)=>{
                    return(
                      <>
                      <option value={state.abbreviation}>{state.name}</option>
                      </>
                    )
                  })}
                </select>
            <p>What date are you looking for?</p>
            <input type="date" className='form-control' name="date" onChange={handleChange}/>
            <div className='button-div'>
            <input type="submit" className='btn' value="SUBMIT" />
            </div>
        </form>       
        </>
    )

}

export default SetLocation