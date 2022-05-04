import React from "react";
import './NewsComponent.scss'

export function NewsComponent({novedades}) {

    

    return(
        <div className="c-news">
          <p className="b-title c-news__title">Novedades</p>

           <div className="c-news__overflow">
           {novedades?.map((novedad, key)=>
            <div key={key} className="c-news__item">

                <div>
                    <img src={novedad.image} alt="/" className="c-news__img"/>
                </div>
            </div>
                )}
                <div className="final"></div>

            </div>
        </div>
    )
}