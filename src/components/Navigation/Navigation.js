import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn){
            return(
            <nav style={{display: 'flex', justifyContent:"flex-end"}}>
            <p onClick={() => onRouteChange('signout')} className="code dim underline link pointer pa3"> Sign Out</p>
            </nav>
            )
        }else{
            return(
            <nav style={{display: 'flex', justifyContent:"flex-end"}}>
            <p onClick={() => onRouteChange('signin')} className="code dim underline link pointer pa3"> Sign In</p>
            <p onClick={() => onRouteChange('Register')} className="code dim underline link pointer pa3"> Register</p>
            <p onClick={() => onRouteChange('home')} className="code dim underline link pointer pa3"> Demo</p>
        </nav>
            )
        }
}

export default Navigation;