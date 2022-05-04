import React from 'react'
import './ReserveCompletePage.scss';
import fenix from '../../assets/images/fenix@3x.png';
import SliderHome from '../../components/SliderHome/SliderHome';
import { Link } from 'react-router-dom';



export default function ReserveCompletePage() {


  // Funcion necesaria para hacer uso de queryParams


  
  return (

    <div className=" p-4 complete">
      <p className="b-title">Reserva Completada</p>
      <div className="complete__fenix">
      <img src={fenix} alt="fenix" className="complete__fenix-im"/>
      </div>
      
      <h3>BE FREE!</h3>
      <p className='complete__text'>Contacta ya con tu guardian y espera a que acepte tu reserva</p>
      <div className='c-reserve-cont'>
        <Link to ="/home">
      <button className='c-reserve-b-btn'>Continuar</button>
      </Link>
      </div>
    </div>
  );
}