import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarGuardian.scss"
import user from '../../assets/images/usuario@3x.png'
import home from '../../assets/images/inicio@3x.png';
import calendar from '../../assets/images/calendarnav.svg';
import anuncio from '../../assets/images/anuncio.svg';


export const NavbarGuardian = () => {
  return (
    <div className="c-nav">
      
          <Link to="/home" >
          <img src={home} className="c-nav__home" alt="Home" />
          </Link>
          <Link to="/tusanuncios" >
          <img src={anuncio} className="c-nav__search" alt="Anuncio" />
          </Link>
          <Link to="/peticiondereserva" >
          <img src={calendar} className="c-nav__chat" alt="Calendar" />
          </Link>
          <Link to="/config" >
          <img src={user} className="c-nav__user" alt="User" />
          </Link>
     

          </div>
    
  )
}
