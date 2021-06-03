import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {    

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <form className="mb-3">
    <input     
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search Jobs"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;



{/* <form className="App__Searchpage" action="">            
            <input type="text" placeholder="search"></input>
            <button>Find Jobs</button>
            <input type="text" placeholder="search"></input>
            <button>Add a Location</button>
          </form> */}