import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

function NavBar(props) {
    return (
        <div className="navbar">
            <Link to="/"><h2 className="navbar__heading">ProductStore</h2></Link>
            <Link to="/add"><p class="navbar__link">Add</p></Link>
        </div>
    )
}

export default NavBar;
