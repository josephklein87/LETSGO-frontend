
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Add from './components/Add';
import Nav from './components/nav';
import Welcome from './components/welcome';
import Mainpage from './components/mainpage';
import SetLocation from './components/setlocation';

function App() {
  let [events, setEvents] = useState([])
  let [myUser, setMyUser] = useState({})
  let [goState, setGoState]=useState("go")
  let [city, setCity] = useState("")
  let [state, setState] = useState("")
  let [date, setDate] = useState('')
  let [pageState, setPageState]= useState('welcome')


  const getEvents = () => {
    const locationObj = {
      city1: city,
      state1: state
    }
    axios.put("http://localhost:3000/events/test", locationObj).then((res)=> {
      console.log(res.data)
      setEvents(res.data)
      console.log(events)
    } )
  }

  const timeConverter = (eventTime) => {
    let time = eventTime
    time = time.split(':')
    
    let hours = Number(time[0])
    let minutes = time[1]
    let AMPM = null
    let actualHour = null
   
    if (hours > 12) {
      AMPM = "PM"
      actualHour = hours - 12
    } else if (hours === 0) {
      AMPM = 'AM'
      actualHour = 12
    } else {
      AMPM = "AM"
      actualHour = hours
    }

    if (minutes.length === 1) {
      minutes = `0${minutes}`
    }
    return(`${actualHour}:${minutes} ${AMPM}`)
  }

  const handleCreate = (addEvent) => {
    axios.post("http://localhost:3000/events", addEvent).then((response) => {
      console.log(response);
      getEvents();
      document.querySelector(".add-form").reset()
    });
  };

  useEffect(()=> {
    getEvents()
  }, [pageState]);


  return (
  <>
  <Nav setMyUser={setMyUser} myUser={myUser} setGoState={setGoState} setPageState={setPageState}/>

  {pageState==="set-location" && myUser.username ? <SetLocation city={city} state={state} date={date} setCity={setCity} setState={setState} setDate={setDate} setPageState={setPageState} /> : null}
  {/* <Add handleCreate={handleCreate} /> */}


  {pageState==='welcome'  ? <Welcome goState={goState} setPageState={setPageState} city={city} state={state} date={date} setCity={setCity} setState={setState} setDate={setDate}/> : null}
  {pageState==='mainpage' ? <Mainpage events={events} setEvents={setEvents} timeConverter={timeConverter} city={city}/> : null }
  </>
  );
}

export default App;
