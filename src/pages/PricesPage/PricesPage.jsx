import React from "react";
import './PricesPage.scss'

import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";

import { Link } from "react-router-dom";

export function PricesPage() {

    

  

    return(
    
        <div className="p-prices">
            <Link to="/getstarted" ><ArrowBackComponent/> </Link>
            <div className="p-prices__container">
            <p className="b-title-t">Selecciona</p>
            <select className="b-select">
            <option className="b-region" disabled selected>Selecciona tu region</option>
                <option value="europa">Europa</option>
                <option value="america">America</option>
            </select>
            </div>
                <p className="b-title">Nuestras tarifas fijas</p>

                <div className="p-prices__item">
                    <p>24 Horas</p>
                    <p className="p-prices__price">6€</p>
                    <p>Por equipaje</p>
                </div>

                <div className="p-prices__adicional">
                    <p>Día adicional</p>
                    <p className="p-prices__price">4€</p>
                    <p>Por equipaje</p>
                </div>

                <div>
                    
                </div>
            </div>
     
    )
}