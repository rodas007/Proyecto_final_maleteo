import React from 'react';
import logoMaleteo from '../../assets/images/maleta@3x.png'
import textoMaleteo from '../../assets/images/maleteo@3x.png'
import './LogoPage.scss'


export default function LogoPage () {

    return(
        <>
         <meta httpEquiv="refresh" content="2;URL=/welcome" /> 
        <div className="background-orange">
            <div className="p-logo">
                <img  src={logoMaleteo} alt="logo maleteo" className="p-logo__img"/>

                <img src={textoMaleteo} alt="texto maleteo" className="p-logo__texto"/>

               
            </div>

        </div>
        </>
    )

}