import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Contact Book</Link>
                    <div>
                        <Link to="/add" className="btn btn-light ml-auto">Create Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
