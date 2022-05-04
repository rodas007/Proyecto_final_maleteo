import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";
import { API } from "../../services/api";
import "./LoginComponent.scss";

export default function LoginComponent() {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setJwt(true);
      navigate('/home');
    });
  };



  return (
    <div className="c-login">
      <form className="c-login__form"  onSubmit={handleSubmit(onSubmit)}>
        <label className="c-login__label" htmlFor="email">
          <span className="b-subtitle">Direccion de correo electronico</span>

          <input className="c-login__input" type="text" placeholder="Email"  id="email" defaultValue="carlos@gmail.com"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })} />
        </label>
        <label className="c-login__label" htmlFor="password">
          <span className="b-subtitle">Contraseña</span>

          <input
            className="c-login__input"
            name="password"
            id="password"
            type="password"
            placeholder="password"
            defaultValue={"ABCedf123"}
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
          />
        </label>
        <div className="c-login__btn">
          <button className="b-btn" >Inicia sesión</button>
        </div>
      </form>
    </div>
  );
}
