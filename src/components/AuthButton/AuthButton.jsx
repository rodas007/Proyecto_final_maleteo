import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";

import "./AuthButton.scss"

export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/");
    }

    return jwt ? (

        <div  className="c-loggedin">
        
            <button className="c-button-logout" 
                onClick={signOut}
            >
                Cerrar Sesion
            </button>
        
        </div>
        
    )
    
     : 
     (
        <div  className="loggedout">
        <p>You are not logged in.</p>
        </div>
    );
    
}
