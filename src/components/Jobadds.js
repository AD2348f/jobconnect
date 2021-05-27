import {useState, useEffect} from "react";
import React from "react";
import useApi from '../hooks/useApi';

const Jobadds = () => {
 
const [jobadds] = useApi();
  return (
  
    <div className='App'>
      
        {jobadds.map((jobadd) => (
          <div key={jobadd._id}>
            <h3>{jobadd.addTitle}</h3>
            <p>{jobadd.addLocation}</p>
            <p>{jobadd.addDesc}</p>
            <p>{jobadd.addTech}</p>
         </div>
        ))}      
    </div>
  );
 };

export default Jobadds;