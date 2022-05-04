import { useForm } from "react-hook-form";
import "./HacerseGuardian.scss";
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { Link } from "react-router-dom";
//import { API } from "../../services/api";
import { useState } from "react";
import DetalleEspacio from "../../components/Detalle-espacio/DetalleEspacio";



const HacerseGuardian = () => {

 
  const [data, setData] = useState();
 const [form, setForm] = useState(false);



  const { register, handleSubmit } = useForm();
/* console.log(register); */


  const onSubmit = formData => {
    /* console.log(formData); */
    setForm(true);
    setData(formData);
   
   /*  API.post('espacios', formData).then(res => {
        console.log('Register espacios',);
    }) */
}
  return (
    <>
     
    
      <div className="b-encabezado">
        <Link to="/config">
          <ArrowBackComponent />
        </Link>

        <p>Configura tu espacio en muy pocos pasos</p>
      </div>
      <div className="b-global">
        <div className="b-describe">
          <input
            className="describe"
            type="text"
            placeholder="Describe tu espacio"
            {...register("locker", {
              required: true,
            })}
          />

         
{!form ? 
          <form  onSubmit={handleSubmit(onSubmit)}>
          
            <button className="btn-continuar" >Continuar</button>
          
            <div>
              <input
                className="Ubi"
                type="text"
                placeholder="Ubicacion"
                {...register("localization", {
                  required: true,
                })}
              />
            </div>

            <div className="mb-3">
              <h6 className="mb-3-title">Fotos</h6>
              <input
                className="form-control"
                type="file"
                placeholder="Fotos"
                id="formFile"
               
              />
            </div>

            <input
              className="Titulo"
              type="text"
              name="titulo"
              id="title"
              placeholder="Titulo"
              {...register("title", {
                  required: true,
                })}
            />

            <input
              className="Disponibilidad"
              type="text"
              placeholder="Disponibilidad"
              {...register("availability", {
                required: true,
        
              })} 
          />
            

            <textarea
              className="Servicios"
              name="description"
              placeholder="Servicios"
              {...register("services", {
                required: true,
        
              })} 
          
            />
          </form>
          : <DetalleEspacio data={data} />}
        </div>
      </div>
    </>
    
  
  );
};
export default HacerseGuardian;
