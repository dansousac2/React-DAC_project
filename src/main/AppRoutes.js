import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import CreateGuest from "../screens/Guest/Create/CreateGuest";
import UpdateGuest from "../screens/Guest/Update/UpdateGuest";
import CreateEvent from "../screens/Event/CreateE/CreateEvent";
import UpdateEvent from "../screens/Event/UpdateE/UpdateEvent";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { CreateGuest } path="/createGuest" />
            <Route component = { UpdateGuest } path="/updateGuest" />
            <Route component = { CreateEvent } path="/createEvent" />
            <Route component = { UpdateEvent } path="/updateEvent" />
        </BrowserRouter>
    )
}

export default AppRoutes;