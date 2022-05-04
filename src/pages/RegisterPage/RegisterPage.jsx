import React from 'react';
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { RegisterComponent } from '../../components/RegisterComponent/RegisterComponent';
import { SocialMediaComponent } from '../../components/SocialMediaComponent/SocialMediaComponent';
import { SwitchComponent } from '../../components/SwitchComponent/SwitchComponent';
import { Link } from "react-router-dom";



export function RegisterPage() {

  return (
    <div>
     <Link to="/login"><ArrowBackComponent/></Link>
     <SwitchComponent className="switch"/>
      <h1 className="p-title">Únete a Maleteo y disfruta de sus ventajas</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <RegisterComponent />
    </div>
  );
}