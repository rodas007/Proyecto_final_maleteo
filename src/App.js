import "./App.scss";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogoPage from "./pages/LogoPage/LogoPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GetStartedPage } from "./pages/GetStartedPage/GetStartedPage";
import { PricesPage } from "./pages/PricesPage/PricesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import ReserveCompletePage from "./pages/ReserveCompletePage/ReserveCompletePage";
import { JwtContext } from "./context/JwtContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import DetalleReservaComponent from "./components/DetalleReservaComponent/DetailUserComponent";
import FichaComponent from "./components/FichaComponent/FichaComponent";
import PeticionDeReservaComponent from "./components/PeticionDeReservaComponent/PeticionDeReservaComponent";
import ConfirmacionDeReservaComponent from "./components/ConfirmacionDeReservaComponent/ConfirmacionDeReservaComponent";
import TusAnuncios from "./pages/TusAnuncios/TusAnuncios";
import HacerseGuardian from "./pages/HacerseGuardian/HacerseGuardian";
import DetalleEspacio from "./components/Detalle-espacio/DetalleEspacio";
import DetalleReserva from "./pages/DetalleReserva/DetalleReserva";
import GoogleMapsPage from "./pages/GoogleMapsPage/GoogleMapsPage";
import GuardianSlider from "./components/GuardlianSlider/GuardianSlider";
import ConfiguracionUsuario from "./pages/ConfiguracionUsuario/ConfiguracionUsuario";
import HelpPage from "./pages/HelpPage/helpPage";
import InviteFriends from "./pages/InviteFriends/InviteFriends";
import UserMessageComponent from "./components/UserMessageComponent/UserMessageComponent";
import { DiscountComponent } from "./components/DiscountComponent/DiscountComponent";
import BreakDownComponent from "./components/BreakDownComponent/BreakDownComponent";
import Loading from "./components/Loading/Loading";
import { LoadingContext } from "./context/LoadingContext";
import AdsGuardian from "./components/AdsGuardian/AdsGuardian";


function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
      <Loading isLoading={isLoading} />

        <div className="">
       
        <LoadingContext.Provider value={{ setIsLoading }}>
                
          <Routes>
          
            <Route path="/" element={<LogoPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/getstarted" element={<GetStartedPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/complete" element={<ReserveCompletePage />} />
            <Route path="/ficha" element={<FichaComponent />} />
            <Route
              path="/detalleusuario"
              element={<DetalleReservaComponent />}
            />
            <Route
              path="/peticiondereserva"
              element={<PeticionDeReservaComponent />}
            />
            <Route
              path="/confirmaciondereserva"
              element={<ConfirmacionDeReservaComponent />}
            />
            <Route path="/tusanuncios" element={<TusAnuncios />} />
            <Route path="/newadd" element={<HacerseGuardian />} />
            <Route path="/guardianslider" element={<GuardianSlider/>}/>
           
            <Route path="/detalleespacio" element={<DetalleEspacio />} />
            <Route path="/detallereservausuario" element={<DetalleReserva />} />
            <Route path="/maps" element={<GoogleMapsPage />} />
            <Route path="/config" element={<ConfiguracionUsuario/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="/Invite" element={<InviteFriends/>}/>
            <Route path="/messages" element={<UserMessageComponent/>}/>
            <Route path="/discounts" element={<DiscountComponent/>}/>
            <Route path="/breakdown" element={<BreakDownComponent/>}/>
            <Route path="/adsguardian" element={<AdsGuardian/>}/>
            <Route path="/*" element={<Navigate to="/login" />} />

          </Routes>
          </LoadingContext.Provider>
        </div>
      </Router>
    </JwtContext.Provider>
  );
}

export default App;
