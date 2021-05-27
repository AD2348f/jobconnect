import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
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
            <Link to={`/jobadd/${jobadd._id}`}>Message</Link>{" "}          
         </div>
        ))}      
    </div>
  );
 };

export default Jobadds;