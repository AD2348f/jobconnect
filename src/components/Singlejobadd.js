import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Jobadds from './Jobadds';

const data = Jobadds;
// console.log([data]);

const Singlejobadd = ({data, loader}) => {
  return (
    <div className="App__Singleoffer">          
        <div>        
          <div>
          {data.map((e, index) => (
            <>
            <div>Here will be Components</div>
            <div><img alt="company banner"></img></div>
            <div>
              <p>About the Company</p>
              <p>{e.addFull}</p>
            </div>
            <div>
              <p>Tasks</p>
              <p>djjfhjdhjlksjoijpoüpkojdhjdhg</p>
            </div>
            <div>
              <p>Profile</p>
              <p>dgghgjhgjgfgdg</p>
            </div>
            <div>
              <p>What We offer</p>
              <p>free beers</p>
            </div>
            <button>Apply</button>
            </>
           ))}
          </div>        
        </div>           
    </div>
      )
}

export default Singlejobadd;
