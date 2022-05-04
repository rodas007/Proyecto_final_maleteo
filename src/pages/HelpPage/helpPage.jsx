
import React from "react"
import "./HelpPage.scss"
import logo from "../../assets/images/maleteo@3x.png";
import fenix from "../../assets/images/fenix@3x.png";
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { Link } from "react-router-dom";

const HelpPage = () =>{
    return(
        <div>
        
        <div className="b-contenedor_ayuda">
        
            <div className="logo-maleteo" ><div className="c-arrow"><Link to="/config"><ArrowBackComponent/></Link></div><img src={logo} alt="logo"></img></div>
            
            <div className="b-faq">
        <div className="b-titulo_ayuda">
            <h1 className="b-ayuda_quest">¿Podemos ayudarte en algo?</h1>
            <div className="b-texto_ayuda">
                <h1 className="titulo-quest">Información general</h1>
                <p className="text-quest">En esta Política de Causas de Fuerza Mayor se explica cómo gestionamos las cancelaciones cuando surgen imprevistos ajenos a tu control después de la reserva que te impiden o prohíben completarla. Esta política se aplica a las reservas tanto de alojamientos como de experiencias.</p>
                <p className="text-quest">Si se permite cancelar en virtud de esta política, tendrá prioridad sobre la política de cancelación de la reserva. Los viajeros afectados por alguna de las situaciones incluidas en esta política pueden cancelar su reserva y recibir un reembolso, crédito de viaje u otra contraprestación, dependiendo de las circunstancias. Los anfitriones que se vean afectados por alguna de las situaciones que cubre esta política pueden cancelar sin penalizaciones, pero es posible que las fechas de la reserva cancelada queden marcadas como no disponibles en sus calendarios dependiendo de las circunstancias.</p>

                <h1 className="titulo-quest">Situaciones cubiertas</h1>
                <p className="text-quest">·En esta política, se utiliza el término «situación» para referirse a las circunstancias que surjan tras la reserva, que no podían preverse, y que impiden o prohíben legalmente completarla.</p>
                <h6 className="situacion">·Cambios en los requisitos del Gobierno con respecto a los desplazamientos.</h6>
                <h6 className="situacion">·Emergencias y epidemias declaradas</h6>
                <h6 className="situacion">·Restricciones gubernamentales a los desplazamientos</h6>
                <h6 className="situacion">·Acciones militares y otros conflictos.</h6>
                <h6 className="situacion">·Catástrofes naturales.</h6>

                <h3>Ponte en contacto con nosotros</h3>
                <p>Si crees que tu caso no se ajusta a las situaciones anteriormente mencionadas o necesitas más Información
                    ponte en contacto con nosotros via e-mail al <b>info@maleteo.com</b>
                </p>

                <div className="fenixlogo"><img src={fenix} alt="logo fenix" ></img></div>
            
            </div></div>
        </div></div>
        </div>
        
    )

}

export default HelpPage;