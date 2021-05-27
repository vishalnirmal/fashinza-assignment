import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/"><h2 className="navbar__heading">ProductStore</h2></Link>
            <Link to="/add">Add</Link>
        </div>
    )
}

export default NavBar;
