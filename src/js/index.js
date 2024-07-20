//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

import Home from "./component/home.jsx";

let digito1 = 0;
let digito2 = 0;
let digito3 = 0;
let digito4 = 0;
let digito5 = 0;
let digito6 = 0;


 const updateCounter = () => {
  digito1 = (digito1 + 1) % 10;

  if (digito1 === 0) {
    digito2 = (digito2 + 1) % 10;
  }

  if ( digito1 === 0 && digito2 ===0) {
    digito3 = (digito3 + 1) % 10;
  }

  if ( digito3 === 0 && digito2 ===0 && digito1 ===0) {
    digito4 = (digito4 + 1) % 10;
  }

  if ( digito4===0 && digito3 === 0 && digito2 ===0 && digito1 ===0) {
    digito5 = (digito5 + 1) % 10;
  }
  if ( digito5 === 0 && digito4===0 && digito3 === 0 && digito2 ===0 && digito1 ===0) {
    digito6 = (digito6 + 1) % 10;
  }

  ReactDOM.createRoot(document.getElementById('app')).render(
    <Home 
      digito1={digito1}
      digito2={digito2}
      digito3={digito3}
      digito4={digito4}
      digito5={digito5}
      digito6={digito6}
    />
  );
};

setInterval(updateCounter, 1000);