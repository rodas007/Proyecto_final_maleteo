import React from 'react'
import "./PeticionDeReservaComponent.scss"
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";


const PeticionDeReservaComponent = () => {
  return (
    
    <div className='pet'>
    <Link to="/home"><ArrowBackComponent/></Link>
        <div className='pet-t'> 
            <h2>Petición de reserva</h2>
        </div>
        <div className='pet-cont'>
            <div className='pet-cont-img'>
            <img className='pet-cont-img-im' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/A4C44F4B-2FC3-4507-8AD5-996BB9D3FE5C.png" alt="" />
            </div>
            <div className='pet-cont-text'>
            <h3>Carlos</h3>
            <p className='pet-cont-text-s'>Depósito - 30 de Julio. 16:00</p>
            <p className='pet-cont-text-s'>Recogida - 30 de Julio. 20:00</p>
            </div>
            <div className='pet-cont-btn'>
            <Link to="/confirmaciondereserva"> <button className='pet-cont-btn-b'>Aceptar</button></Link>
            <a className='pet-cont-btn-a'href="declinar">Declinar</a>
            </div>
        </div>
        <div className='pet-cont'>
            <div className='pet-cont-img'>
            <img className='pet-cont-img-im' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/E2B4491C-3764-4D2D-BC9A-5A13C00FAD8D.png" alt="" />
            </div>
            <div className='pet-cont-text'>
            <h3>Cristina</h3>
            <p className='pet-cont-text-s'>Depósito - 30 de Julio. 17:00</p>
            <p className='pet-cont-text-s'>Recogida - 30 de Julio. 20:00</p>
            </div>
            <div className='pet-cont-btn'>
            <button className='pet-cont-btn-b'>Aceptar</button>
            <a className='pet-cont-btn-a'href="declinar">Declinar</a>
            </div>
        </div>
        <div className='pet-cont'>
            <div className='pet-cont-img'>
            <img className='pet-cont-img-im' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/E5BED559-B3B6-4874-8BC7-CD2E67998B34.png" alt="" />
            </div>
            <div className='pet-cont-text'>
            <h3>Joaquin</h3>
            <p className='pet-cont-text-s'>Depósito - 01 de Agosto. 11:00</p>
            <p className='pet-cont-text-s'>Recogida - 01 de Agosto. 18:00</p>
            </div>
            <div className='pet-cont-btn'>
            <button className='pet-cont-btn-b'>Aceptar</button>
            <a className='pet-cont-btn-a'href="declinar">Declinar</a>
            </div>
        </div>
    
    </div>
  )
}

export default PeticionDeReservaComponent