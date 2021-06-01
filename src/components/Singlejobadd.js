import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';



const Singlejobadd = () => {
  //const data = Jobadds;
  //const [jobadds] = useApi();
  
const { id } = useParams();

const [jobadd, setJobAdd] = useState([]);
const [loader, setLoader] = useState(false);
const url = "https://jobconnect-try.herokuapp.com/jobadds";

useEffect(() => { fetchJobAdd();
    }, []);

const fetchJobAdd = async() => {
    setLoader(true);
    await Axios.get(`${url}/${id}`)
    .then((response) => setJobAdd(response.data.data))
    .catch((error) => console.log(error));
    setLoader(false)
}   

console.log(jobadd)

  return (
    <div className="App__Singleoffer">          
        <div>        
              <div className='App'>
                  <h3>{jobadd.addTitle}</h3>
                  <p>{jobadd.addLocation}</p>
                  <p>{jobadd.addFull}</p>
                  <p>{jobadd.addTech}</p>   
            </div>           
        </div>
    </div>
      )  
}

export default Singlejobadd;
