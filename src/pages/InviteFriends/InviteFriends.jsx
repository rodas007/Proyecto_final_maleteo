
import React from "react";
import "./InviteFriends.scss"
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { Link } from "react-router-dom";


const InviteFriends = () =>{
    return(
    <div className="contenedor-invita background-orange">
    <div className="b-cabecerainvite"><img className="b-cabecera-img" src="https://img.freepik.com/free-photo/group-diverse-friends-playing-game-mobile-phone_53876-82395.jpg" alt="fotocabececera" ></img></div>
    <div className="c-arrowinvite"><Link to="/config"><ArrowBackComponent className="c-arrow"/></Link> </div>
       <div className="texto-invita">
        <h1>Hazte Premium</h1>
        <p>Consigue créditos descuento y ofertas en tus próximas reservas</p>
        <p><b>No te guardes el secreto,</b> invita a tus amigos a Mateleo y ganad <b>5€</b> por cada uno</p>
        <p>Regístrate en Maleteo, déscargate la APP y manda el link a tus amigos</p>
        <h1>¿Aún hay más?</h1>
        <p>¿Quieres ser Guardian? Consigue más de 10 reservas en un més y llévate <b>3€</b> extra por cada una de ellas</p>



        </div>
        <p>Link invitado: https://cutt.ly/iGDf5qR</p>
        </div>
    )

}
export default InviteFriends;