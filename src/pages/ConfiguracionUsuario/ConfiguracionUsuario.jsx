import React from "react";
import fotoMarta from "../../assets/images/fotoMarta.png";
import fotoCarlos from "../../assets/images/fotoCarlos.png";
import fotoDefault from "../../assets/images/fotoperfilusers.png";
import { Link } from "react-router-dom";
import "./ConfiguracionUsuario.scss";
import { NavComponent } from "../../components/NavComponent/NavComponent";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton";
import { NavbarGuardian } from "../../components/NavbarGuardian/NavbarGuardian";
import { API } from "../../services/api";

const ConfiguracionUsuario = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const onGuardian = () => {
    API.patch(`users/${user._id}`, { role: "admin" }).then((res) => {
      /* console.log("Register user as Guardian"); */
      navigate("/login");
    });
  };

  return (
    <div>
      <div className="b-General">
        <div className="b-div1">
          <div className="b-divuser">
            {user.role === "admin" ? (
              <Link className="linkto" to="/ficha">
                <h1 className="b-nombre">Hola, {user.name}</h1>
                <p className="b-text">Puedes ver y editar tu perfil</p>
              </Link>
            ) : (
              <h1 className="b-nombre">Hola, {user.name}</h1>
            )}
          </div>
          {user.name === "Marta" ? (
            <div className="foto-usurario">
              <img className="fotoMarta" src={fotoMarta}></img>
            </div>
          ) : (
            <>
              {user.name === "Carlos" ? (
              <div className="foto-usurario">
                <img className="fotoMarta" src={fotoCarlos}></img>
              </div>
              ) : (
              <div className="foto-usurario">
                <img className="fotoMarta" src={fotoDefault}></img>
              </div>
              )
              }</>
          )}

          {user.role === "admin" ? (
            <div className="b-subtitle">
              <h3
                onClick={() => {
                  onGuardian();
                }}
              >
                Ahora eres un guardian{" "}
              </h3>
              <p className="b-text">
                Publica un anuncio y gana desde 400€ de media al mes
              </p>
              <p className="b-line"></p>
            </div>
          ) : (
            <div className="b-subtitle">
              <h3
                onClick={() => {
                  onGuardian();
                }}
              >
                Conviértete en guardian{" "}
              </h3>
              <p className="b-text">Puedes ganar desde 400€ de media al mes</p>
              <p className="b-line"></p>
            </div>
          )}
        </div>
        {user.role === "admin" ? (
          <Link className="linkto" to="/newadd">
            <div className="b-subtitle">
              <h3>Publica tu anuncio</h3>
              <p className="b-line"></p>
            </div>
          </Link>
        ) : (
          <></>
        )}

        <div className="b-subtitle">
          <Link className="linkto" to="/invite">
            <h3>Invita a tus amigos</h3>
          </Link>
          <p className="b-text">Y podrás ganar descuentos para ti</p>
          <p className="b-line"></p>
        </div>
        <div className="b-subtitle">
          <Link className="linkto" to="/discounts">
            <h3>Créditos y descuentos</h3>
          </Link>
          <p className="b-line"></p>
        </div>

        <div className="b-subtitle">
          <Link className="linkto" to="/help">
            <h3>Ayuda</h3>
          </Link>
          <p className="b-line"></p>
        </div>
      </div>
      <AuthButton />
      {user.role === "admin" ? <NavbarGuardian /> : <NavComponent />}
    </div>
  );
};

export default ConfiguracionUsuario;
