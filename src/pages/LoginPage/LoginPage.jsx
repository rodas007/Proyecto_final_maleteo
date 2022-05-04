import React from 'react'
import "./LoginPage.scss";
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { SocialMediaComponent } from '../../components/SocialMediaComponent/SocialMediaComponent';
import { SwitchComponent } from '../../components/SwitchComponent/SwitchComponent';
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default function LoginPage() {


    
  return (
    <div>
      <Link to="/getstarted"><ArrowBackComponent/></Link>
      <SwitchComponent className="switch"/>
      {/* <NavLink className="register-nav__b-btn" to="/register">Register</NavLink> */}
      <h1 className="p-title">Inicia sesión ahora</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <LoginComponent/>
    </div>
  );
}
