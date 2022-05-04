import React from "react";
import './NavComponent.scss'
import home from '../../assets/images/inicio@3x.png';
import search from '../../assets/images/buscar@3x.png';
import chat from '../../assets/images/mensaje@3x.png';
import user from '../../assets/images/usuario@3x.png'
import {Link} from "react-router-dom";

export function NavComponent() {


    return(
        <div className="c-nav">
           <Link to="/home"><img src={home} alt="/" className="c-nav__home"/></Link>
          <Link to="/maps"><img src={search} alt="/" className="c-nav__search"/></Link>
          <Link to="/messages"> <img src={chat} alt="/" className="c-nav__chat"/></Link>
          <Link to="/config"><img src={user} alt="/" className="c-nav__user"/></Link>
        </div>
    )
}
