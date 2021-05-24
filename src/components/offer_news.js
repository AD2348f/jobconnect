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
    .then((response) => setData([response.data]))
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
                  <h3>{e.add_title}</h3>
                  <p>{e.add_desc}</p>
                  {/* <p className="desc">{e.description}</p>
                  <p>Tags: {e.tag_id[0].name}</p>
                  <p> Stars : {e.stars}</p>
                  <button className="btnMore">More</button> */}
                  </div>
                </>                
              ))}
            </div>
            {data.add_desc}
          </div>     
    }   
    </>
  );
 };

export default Jobadds;