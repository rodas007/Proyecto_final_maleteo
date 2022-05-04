import React from 'react';
import { Link } from "react-router-dom";
import './SwitchComponent.scss';

export function SwitchComponent(){
  return (
    <div className="switch">
    
    <Link className="linkto" to="/login"> <span className={window.location.href === "http://localhost:3000/login" ? "switch__text switch__border" : "switch__text"}>Iniciar sesión</span> </Link>
    <Link className="linkto"   to="/register"> <span className={window.location.href === "http://localhost:3000/register" ? "switch__text switch__border" : "switch__text"}>Resgístrate</span></Link>

    </div>
  );
}