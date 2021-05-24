import React from "react";


function Offer({ offer, getSelectedOffer }, key) {
  return (
    
        <div className="offer__wrapper">
          <div>
              {offer.id}
          </div>         
          <div>
              {offer.date}
          </div>          
          <div> 
              {offer.title}
          </div>
        </div>      
  );
}

export default Offer;