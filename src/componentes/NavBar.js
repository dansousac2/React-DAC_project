import React from "react";
import NavbarItem from './NavbarItem'

function NavBar (props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary"> 
            <div className="container"> 
                <a href="/" className="navbar-brand">My Events</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive"> 
                    <ul className="navbar-nav">
                        <NavbarItem href="/login" label="Login" />

                        <NavbarItem href="/listEvents" label="Events" />
                        <NavbarItem href="/createEvent" label="Create Event" />
                        <NavbarItem href="/deleteEvent" label="Delete Event" />

                        <NavbarItem href="/listGuests" label="Guests" />
                        <NavbarItem href="/createGuest" label="Create Guest" />
                        <NavbarItem href="/updateGuest/:id" label="Update Guest" />
                        <NavbarItem href="/deleteGuest" label="Delete Guest" />
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default NavBar;