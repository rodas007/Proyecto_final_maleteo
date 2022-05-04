import React from 'react'
import "./DiscountComponent.scss";
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";


export const DiscountComponent = () => {
  return (
      
   <>
   
        <div className="b-encabezado" ><Link to="/config"><ArrowBackComponent/></Link>
        <p className="b-encabezado-title">Descubre nuestros créditos y descuentos</p>
        </div>
        <div className="b-credits-and-discount">
        <div>
            <h3 className="b-subtitle">Créditos</h3>
            <p className="b-text">Una vez te conviertas en guardian, podrás solicitar por el medio que mejor te venga a nuestros agentes, el catalogo de créditos.</p>
        </div>
        <div>
            <h3 className="b-subtitle">Descuentos</h3>
            <p className="b-text">Por cada 5 maletas que guardes tendrás para elegir:</p>
            <ul>
                <li>Un guardador gratis en cualquiera de las ciudades en donde estemos presentes</li>
                <li>Pase vip en vuelos de la UE</li>
                <li>Te aumentamos un 5% sobre el precio estandar de la última maleta guardada</li>
            </ul>
            <p className="b-text">Por cada 10 maletas que guardes tendrás para elegir:</p>
            <ul>
                <li>Descuentos para reservar alojamiento en cualquier parte del mundo con Booking</li>
                <li>Descuentos para aquiler de coche con RentCar</li>
                <li>Cursos gratis con Upgrade-Hub</li>
            </ul>
        </div>
    </div>
    </>
  )
}

