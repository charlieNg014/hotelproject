import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

//reusable items
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import RoomDetails from "./components/RoomDetails";
import BookingDetails from "./components/BookingDetails";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import SiteFooter from "./Pages/SiteFooter";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={RoomDetails} />
        <Route exact path="/booking/add" component={BookingDetails} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/sitefooter" component={SiteFooter} />
      </Switch>
    </>
  );
}

export default App;