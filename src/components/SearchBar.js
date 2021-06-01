import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
        
            {/* <form className="App__Searchpage" action="">            
            <input type="text" placeholder="search"></input>
            <button>Find Jobs</button>
            <input type="text" placeholder="search"></input>
            <button>Add a Location</button>
          </form> */}

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search Jobs"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;

