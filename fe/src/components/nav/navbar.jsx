import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){  
    return<nav className="navbar bg-dark container">
        <h4><Link to="/">Home</Link> </h4>
        <h4><Link to="/prodotti">Auto</Link></h4>
        <h4><Link to="/richiesta_info">Richiedi Info</Link></h4>
    </nav>
}

export default Navbar