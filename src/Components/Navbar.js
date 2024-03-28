// bcz i need react function based component so I just type 'rfc'

import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

// Props is simply like ke yeh Navbar aik component hai or iskykuch variable me jkhud bataounga in "App.js" me

// is tarah se hum ko yahan props likha na parhta hai
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            {/* is tarah se pass karke me bahar se hi isko edit or change kar sakhta 
            since its Java script so mujhy curly brackets lagany parhaingy */}
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              {/*For react router dom hum link or to use instead of a or href  */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li> */}
            <li className="nav-item dropdown">
            </li>
          </ul>
          <div className="d-flex">
            {/*On Click me hum function desakhty usko call nhi kar sakhty tabhi hum ny yahan Arrow Function deya hai  */}
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'20px', width:'20px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: "20px" ,width:"20px", cursor:"pointer"}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: "20px" ,width:"20px", cursor:"pointer"}}></div>
          </div>

          <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes is for self check
// PropTypes serves as the method you can use to ensure
// the correct datatype is passed 
// for each prop, meaning whatever is rendered is correct
Navbar.propTypes = {

  // is Required se yeh must hojaiga dalna warna error aayega
  title:PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

//yeh tab show hoga jab aap koi bhi props ki value set nhi karogy 
Navbar.defaultProps = {
  title: 'Stranger'
};
