
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Add from './components/Add';
import Nav from './components/nav';
import Welcome from './components/welcome';
import Mainpage from './components/mainpage';

function App() {
  let [events, setEvents] = useState([])
  let [favs, setFavs] = useState([])
  let [myUser, setMyUser] = useState({})
  let [goState, setGoState]=useState("go")
  let [city, setCity] = useState("")
  let [state, setState] = useState("")
  let [date, setDate] = useState('')
  let [pageState, setPageState]= useState('welcome')
  const [showAddForm, setShowAddForm]=useState(false)

  const addFormToggle = () => {
    setShowAddForm(!showAddForm)
  }

  const getFavs = () => {
    const favObj = {
      thisUser: myUser.username
    }
    axios.put("https://afternoon-lake-04423.herokuapp.com/events/userFavs", favObj).then((res) => {
      setFavs(res.data)
    })
  }


  const getEvents = () => {
    const locationObj = {
      city1: city,
      state1: state
    }
    axios.put("https://afternoon-lake-04423.herokuapp.com/events/findCity", locationObj).then((res)=> {
      setEvents(res.data)
      console.log(res.data)
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
    } else if (hours == 12) {
      actualHour = 12;
      AMPM = "PM"
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
    console.log(addEvent)
    axios.post("https://afternoon-lake-04423.herokuapp.com/events", addEvent).then((response) => {
      getEvents();
      document.querySelector(".add-form").reset()
      addFormToggle()
    });
  };

  useEffect(()=>{
    getFavs()
  }, [myUser])

  useEffect(()=> {
    getEvents()
  }, [city]);


  return (
  <>
  <Nav setEvents={setEvents} getEvents={getEvents} addFormToggle={addFormToggle} setMyUser={setMyUser} myUser={myUser} setGoState={setGoState} setPageState={setPageState} pageState={pageState} city={city} state={state}/>

  {showAddForm ? <Add handleCreate={handleCreate} addFormToggle={addFormToggle} myUser={myUser} city={city} state={state}/> : null}


  {pageState==='welcome'  ? <Welcome goState={goState} setPageState={setPageState} city={city} state={state} date={date} setCity={setCity} setState={setState} setDate={setDate}/> : null}
  {pageState==='mainpage' || pageState === 'my-events' ? <Mainpage events={events} getEvents={getEvents} setEvents={setEvents} timeConverter={timeConverter} city={city} state={state} pageState={pageState} myUser={myUser} setDate={setDate} date={date} getFavs={getFavs} favs={favs} setFavs={setFavs}/> : null }
  </>
  );
}

export default App;
