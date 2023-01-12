
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Add from './components/Add';
import Nav from './components/nav';

function App() {
  let [events, setEvents] = useState([])
  let [myUser, setMyUser] = useState({})

  const getEvents = () => {
    axios.get("http://localhost:3000/events").then((res)=> {
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
    });
  };

  useEffect(()=> {
    getEvents()
  }, []);


  return (
  <>
  <Nav setMyUser={setMyUser} myUser={myUser} />
  <Add handleCreate={handleCreate} />


  {events.map((event => { 
    return (
      <>
        <div className="event-frontpage-container" style={{background: `linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        ), url(${event.picture})`}}>
          <h2 className='tile-time'>{timeConverter(event.time)}</h2>
          <h2 className='tile-header'>{event.name}</h2>
        </div>
      </>
    )
  }))}


  </>
  );
}

export default App;
