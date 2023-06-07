import React from "react";
import './Logo.css'
import logo from './logo.png'
import Tilt from 'react-parallax-tilt';
const Logo = () => {

  return(
    <div class="ma4 mt0 w-10">
      <div class="tilt br2 shadow-2">
        <div class="pa2">
          <img alt="logo" src={logo} />
        </div>
      </div>
    </div>
    )
}

export default Logo;