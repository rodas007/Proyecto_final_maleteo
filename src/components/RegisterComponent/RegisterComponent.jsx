import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from '../../services/api';

import "./RegisterComponent.scss";

export function RegisterComponent() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();


  const onSubmit = formData => {
    API.post('register', formData).then(res => {
       /*  console.log('Register user',); */
        navigate('/login');
    })
}



  return (
    <div className="c-register">
      <form   className="c-register__form"  onSubmit={handleSubmit(onSubmit)}>
        <label className="c-register__label" htmlFor="email">
          <span className="b-subtitle">Direccion de correo electronico</span>

          <input
            className="c-register__input"
            type="email"
            placeholder="Email"
              id="email"
              defaultValue=""
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            
          />
          
        </label>
        <label className="c-register__label" htmlFor="name">
          <span className="b-subtitle">Nombre</span>

          <input
            className="c-register__input"
            placeholder="Nombre"
              id="name"
              defaultValue=""
              {...register("name", {
                required: true,})}
           
          />
          
        </label>
        <label className="c-register__label" htmlFor="LastName">
          <span className="b-subtitle">Apellidos</span>

          <input
            className="c-register__input"
            placeholder="Apellidos"
              id="surname"
              defaultValue=""
              {...register("surname", {
                required: true,})}
           
          />
          
        </label>
        <label className="c-register__label" htmlFor="password">
          <span className="b-subtitle">Contraseña</span>

          <input
            className="c-register__input"
            id="password"
            type="password"
            name="password"
              placeholder="Contraseña"
              defaultValue={"ABCedf123"}
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            
          
          
        </label>
        <label className="c-register__label" htmlFor="date">
          <span className="b-subtitle">Fecha de nacimiento</span>

          <input
            className="c-register__input"
            name="date"
            id="date"
            type="date"
            {...register("date", {
                required: true,
              })}
          />
          
        </label>
        <div className="c-register__btn">
        <button className="b-btn c-register__btn" >Registrarse</button>
        </div>
      </form>
     
    </div>
  );
}
