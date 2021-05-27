import React from 'react';
import Jobadds from './Jobadds';
import useApi from '../hooks/useApi';



const Singlejobadd = () => {
  const data = Jobadds;
  const [jobadds] = useApi();
  return (
    <div className="App__Singleoffer">          
        <div>        
              <div className='App'>
                <ul>
                  {jobadds.map((jobadd) => (
                    <li key={jobadd._id}>
                      <h3>{jobadd.addTitle}</h3>
                      <p>{jobadd.addLocation}</p>
                      <p>{jobadd.addFull}</p>
                      <p>{jobadd.addTech}</p>
                    </li>
                    ))}
                </ul>        
            </div>           
        </div>
    </div>
      )  
}

export default Singlejobadd;
