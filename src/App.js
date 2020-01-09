import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';


//reusable items
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import RoomDetails from './components/RoomDetails';
import BookingDetails from './components/BookingDetails';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={RoomDetails} />
      <Route exact path="/booking/add" component={BookingDetails} />
    </Switch>
    </>
  )
}

export default App;
