import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import CreateGuest from "../screens/Guest/Create/CreateGuest";
import UpdateGuest from "../screens/Guest/Update/UpdateGuest";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { CreateGuest } path="/createGuest" />
            <Route component = { UpdateGuest } path="/updateGuest" />
        </BrowserRouter>
    )
}

export default AppRoutes;