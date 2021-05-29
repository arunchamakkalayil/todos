import React, { useState } from "react";
import heart from "../assets/heart-solid.svg"



function Cards(props) {
 

  let [btState, setBtState] = useState("Add to favourates");
   
  let [initialClass, setClass] = useState("");


  function BtnSet(img) {

    setBtState((preState) => {
      if (preState == "Add to favourates") {
        props.selected(img);
        return "Added to favourates";
      
      
      } else {
        return "Add to favourates";
        props.remove(img);
      }
    });

    setClass((preClass) => {
      if (preClass =="") {
        return "active";
      } else {
        return "";
      }
    });
  }

  return (
    
    
    <div className={`card ${initialClass}`}>

     <img src={heart} id="imgicon" />
      
      <img src={props.cardContent.img} />
      
      

      <h3>{props.cardContent.name}</h3>
      <p>{props.cardContent.phone}</p>
      <p>{props.cardContent.email}</p>
      <button onClick={(()=>[
        BtnSet(props.cardContent.img)
      ])} className="button">
        {btState}
      </button>
 
    </div>
  );
}

export default Cards;
