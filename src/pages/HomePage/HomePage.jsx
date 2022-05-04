import React, { useContext, useEffect, useState } from "react";
import { environment } from "../../environments/environment";
import axios from "axios";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import calendario from "../../assets/images/icons8Calendar100Copy@3x.jpg";
import maleta from "../../assets/images/maletita@3x.jpg";
import { NewsComponent } from "../../components/NewsComponent/NewsComponent";
import { ExperienceComponent } from "../../components/ExprienceComponent/ExperienceComponent";
import { NavComponent } from "../../components/NavComponent/NavComponent";
import SliderHome from "../../components/SliderHome/SliderHome";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { LoadingContext } from "../../context/LoadingContext";
import { API } from "../../services/api";
import { NavbarGuardian } from "../../components/NavbarGuardian/NavbarGuardian";


export default function HomePage() {

  const user = JSON.parse(localStorage.getItem("user"));
 
  
  const [experiences, setExperiences] = useState();
  const [novedades, setNovedades] = useState();
  const [expLimit, setExpLimit] = useState(1);
  const { setIsLoading } = useContext(LoadingContext);
  const moment = new Date();
  
  const [dateDeposit, setDateDeposit] = useState();
  const [dateCollect, setDateCollect] = useState();
  const [numBaggage, SetNumBaggage] = useState([]);
  
  
  /* console.log("DESPOSITO",dateDeposit);
  console.log("RECOGIDA",dateCollect);
  console.log("numero maletas",numBaggage); */

  useEffect(() => {
    const getNews = async () => {

      
      setIsLoading(true);
      const res = await axios.get(`${environment.url}novedades`);
      
      setNovedades(res.data);
      /* console.log(res.data); */
      setIsLoading(false);
    };

    getNews();
  }, []);


    const getExp = async (limit = 2) => {
      setIsLoading(true);
      const res = await axios.get(
        `${environment.url}experiencias?limit=${limit}`
      );
      
      setExperiences(res.data.docs);
      /* console.log(res.data); */
      setIsLoading(false);
    };


    useEffect(() => {
    getExp();
  }, []);


  const changePage = (newPage) => {
    setExpLimit(newPage);
    getExp(newPage +1);
  }




  

  return (
    <div className="home">
      <p className="b-title home__title">Encuentra tu guardian</p>
      <form>
        <div className="c-form">
        <InputComponent />
          <div className="c-prueba">
            <Link to="#">
              <img src={calendario} className="img" alt="/" />
            </Link>
            <Calendar className="retirada"  minDate = {moment} dateFormat="dd/mm/yy"  value={dateDeposit} onChange={(e) => setDateDeposit(e.value)}  placeholder="Deposito"  />
          </div>
          <div className="c-prueba2">
            <Link to="#">
              <img src={calendario} className="img" alt="/" />
            </Link>
            <Calendar className="retirada" minDate = {dateDeposit} dateFormat="dd/mm/yy"   value={dateCollect} placeholder="Retirada" onChange={(e) => setDateCollect(e.value)}  />
          </div>
        </div>
        <div className="c-form2">
          <div className="c-prueba">
            <Link to="#">
              <img src={maleta} className="img2" alt="icon maleta" />
            </Link>
            <select className="retirada" placeholder="Nº de piezas"   id="numberBaggage" value={numBaggage}  onClick={(e) => SetNumBaggage(e.value)}>
            
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            
            
            </select>
          </div>
          <div className="c-prueba3">
            <Link to="/maps">
              <button className="b-btn">Buscar</button>
            </Link>
          </div>
        </div>
      </form>

       <SliderHome novedades={novedades} />
      {/* <NewsComponent novedades={novedades} /> */}
      <ExperienceComponent experiences={experiences} />
      <button className="b-btn home__button"onClick={() => changePage(expLimit + 2)}  >Mostrar más</button>
      {user.role === "admin" ?  <NavbarGuardian/> : <NavComponent />}
    </div>
  );
}
