import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import CreateGuest from "../screens/Guest/Create/CreateGuest";
import UpdateGuest from "../screens/Guest/Update/UpdateGuest";
import CreateEvent from "../screens/Event/CreateE/CreateEvent";
import UpdateEvent from "../screens/Event/UpdateE/UpdateEvent";
import DeleteEvent from "../screens/Event/DeleteE/DeleteEvent";
import ViewEvents from "../screens/Event/ListAllEvents/ViewEvents";
import HomePage from "../screens/HomePage/HomePage";
import Login from "../screens/Login/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { CreateGuest } path="/createGuest" />
            <Route component = { UpdateGuest } path="/updateGuest" />

            <Route component = { CreateEvent } path="/createEvent" />
            <Route component = { UpdateEvent } path="/updateEvent/:id" />
            <Route component = { DeleteEvent } path="/deleteEvent" />
            <Route component = { ViewEvents } path="/listEvents" />
            
            <Route component = { HomePage } path="/" exact/>
            <Route component = { Login } path="/login" />
        </BrowserRouter>
    )
}

export default AppRoutes;