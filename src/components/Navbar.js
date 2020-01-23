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
        // window.location = "/"
    }
    render() {
        return (
            <nav className="navbar-fluid  mr-auto">
                <div className="nav-center">
                    <div className="nav-header active">
                        {/* <Link to="/"> */}
                            <img src={logo} alt="My navbar" />
                            <button type="button"  data-toggle="collapse" data-target=".navbar-collapse.show" style={{marginLeft: -30}} className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon"/> 
                            </button>
                        {/* </Link> */}
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