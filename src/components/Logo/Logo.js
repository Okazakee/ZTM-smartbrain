import React from "react";
import './Logo.css'
import Propic from './Propic.png'
import Tilt from 'react-parallax-tilt';
const Logo = () => {
    return(
      <Tilt>
        <img  className="br-100 " src={Propic} height={100} width={100} alt=''/>
        </Tilt>
    )
}

export default Logo;