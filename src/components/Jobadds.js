
import {useState, useEffect} from "react";
import React from "react";

const Jobadds = ({data, loader}) => {
console.log(data)
  return (
    <>
      {loader ? "loading!" :  
          <div>   
             <div>             
              {data.map((e, index) => (
                <>  
                <div key={index}>
                  <h3>{e.addTitle}</h3>
                  <p>{e.addDesc} <button>read more</button> </p> 
                  <p>Company: {e.addComp}</p> 
                  <p>Location: {e.addLocation}</p>
                  <p>Techstack: {e.addTech}</p>
                  <p>Posted on: {e.addDate}</p>
                  <p>Worktime: {e.addWrkt}</p> 
                  <p>Contract type: {e.addContr}</p>                                
                </div>
                </>                
              ))}
            </div>            
          </div>     
    }   
    </>
  );
 };

export default Jobadds;