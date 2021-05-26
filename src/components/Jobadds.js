import Axios from "axios";
import {useState, useEffect} from "react";
import React from "react";

const url = "http://localhost:5000/jobadds"
const Jobadds = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    setLoader(true);
    await Axios.get(url)
    .then((response) => setData(response.data.data))
    .catch((error) => console.log(error));
    setLoader(false)
  }
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