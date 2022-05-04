import React, { useState } from "react";
import "./InputComponent.scss";
import lupa from "../../assets/images/lupa@3x.jpg";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";



export function InputComponent() {
  



  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
         /*  console.log("📍 Coordinates: ", { lat, lng }); */
        })
        .catch((error) => {
          /* console.log("😱 Error: ", error); */
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  return (
    
    <div>
    <div className="container">

      <img className="img3" src={lupa} alt="/" />
      
      <input  className="where" style={{ width: 300, maxWidth: "90%" }} value={value}
      onChange={handleInput}
      disabled={!ready} placeholder="¿Dónde te encuentras? Madrid,Barcelona..." />
{status === "OK" && <ul className="c-sugestions">{renderSuggestions()}</ul>}
      <div className="suggestion-box">
        <div className="suggestion-box"></div>
      
      </div>
    </div>
  </div>


  );
};
