import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


//Function for each item in navigation
function NavigationItem(props) {
    return (
        <>
            {/* Navigation Item */}
            <li class="nav-item">
                <Link to={props.navigationName} className="nav-link active" aria-current="page">{props.name}</Link>
            </li>
        </>
    )
}

export default function Navbar() {
    return (
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">

                {/* Call our navigation function items */}
                <NavigationItem navigationName={'/'} name={"Home"} />
                <NavigationItem navigationName={'/services'} name={"Services"} /> 
                <NavigationItem navigationName={'/contact'} name={"Contact"} />                 

            </ul>

        </div>
    );
}
