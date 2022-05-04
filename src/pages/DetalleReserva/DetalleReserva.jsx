import React from "react";
import { Link } from "react-router-dom";
import "./DetalleReserva.scss"
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { NavComponent } from "../../components/NavComponent/NavComponent";


const DetalleReserva = () =>{
    return(
        <div className="c-detail-box">
            
   
<Link to="/ficha"> <ArrowBackComponent/></Link>
           <div className="b-box12">
        <h1 className="detalle"> Detalles de tu reserva</h1>
        <div className="lista-opcion">
            <ul className="b-fila">
                <li><h5>LLegada</h5></li>
                <li><h5>Recogida</h5></li>
                <li><h5>Equipaje</h5></li>
            </ul>
            <ul className="b-fila">
                <li className="c-detail-li"><p>04 de Mayo 2022</p></li>
                <li className="c-detail-li"><p>05 de Mayo 2022</p></li>
                <li className="c-detail-li"><p>2 Equipajes</p></li>
            </ul>
        </div>
         </div>

        <div className="b-tarifas">

         <div className="b-tarifas_text"><p>Primeras 24h  6,00 x 2 equipajes</p>
         <p className="b-tarifas_price"> 10€ </p></div>

         <div className="b-tarifas_text"><p>Gastos de gestión </p>
         <p className="b-tarifas_price2"> 2€ </p></div>

         <div className="b-tarifas_text"><p>Servicio asegurado hasta 1000€ </p>
         <p className="b-tarifas_price"> Gratis </p> </div>

         <div className="b-tarifas_text"><p>Total</p>
         <b><p className="b-tarifas_price12"> 12€ </p></b></div>


        <div className="b-btn-cont">
         <Link to="/complete"><button className="b-btn-reserva">Reservar</button></Link>
      <NavComponent/>   
</div>

        </div>
         
        
        
        
     
        </div>
       
    )


}

export default  DetalleReserva;