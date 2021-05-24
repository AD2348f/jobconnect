import React from "react";
import Offer from "./offers";
import useApi from "../hooks/useApi";

function OfferList() {
  // hook created to collect all the messges from the API

  const [joboffers] = useApi();

  return (
    <div >
      {joboffers.map((message, index) => {
        return (
          <div>
            <Offer key={index} message={message} />
          </div>
        );
      })}
    </div>
  );
}

export default OfferList;