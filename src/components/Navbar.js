import React, {Component} from 'react';
import logo from "../images/logo.svg";
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navbar extends Component {
    //define the false value for opening navbar 
    state = {
        isNavbarOpen: false
    }
    handleToggle =() => {
        this.setState({isNavbarOpen: !this.state.isNavbarOpen})
    }
    render() {
        return (
            <nav className="navbar-fluid">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="My navbar image" />
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon"/> 
                            </button>
                        </Link>
                    </div>
                    <ul className={this.state.isNavbarOpen ? "nav-links show-nav" : "nav-links"}>
                        <li style={{marginTop: -5}}>
                            <Link to="/">Home</Link>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}