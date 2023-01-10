
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Add from './components/Add';

function App() {
  let [events, setEvents] = useState({})

  const getEvents = () => {
    axios.get("http://localhost:3000/events").then((res)=> {
      setEvents(res.data)
    } )
  }

  const handleCreate = (addEvent) => {
    console.log(addGift);
    console.log(user);
    axios.post("http://localhost:3000/events", addEvent).then((response) => {
      console.log(response);
      getEvents();
    });
  };

  return (
  <>
  <Add handleCreate={handleCreate} />
  </>
  );
}

export default App;
