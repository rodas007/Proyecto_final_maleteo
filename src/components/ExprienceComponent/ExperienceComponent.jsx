import React from "react";
import './ExperienceComponent.scss'

export function ExperienceComponent({experiences}) {

    

    return (
        <div className="c-experience">
            <p className="c-title-primary">Experiencias</p>
            <div className="c-experience__container">
                {
                    experiences?.map( (experiences) =>
                  <div key={experiences.text} className="c-experience__item">
                <div className="c-experience__container-img">
                    <img src={experiences?.image} alt="/" className="c-experience__img" />
                </div>
                <p className="title-secondary">{experiences.title}</p>
                <p className="text-secondary">{experiences.text}</p>
                </div>
                 )}
            </div>

        </div>
    )
}