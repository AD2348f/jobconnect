import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import AdSearchList from './AdSearchList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [adListDefault, setAdListDefault] = useState();
  const [adList, setAdList] = useState();

  const fetchData = async () => {
    return await fetch('https://jobconnect-try.herokuapp.com/jobadds')
      .then(response => response.json())
      .then(data => {
         setAdList(data.data) 
         setAdListDefault(data.data)
       });
  }

  const updateInput = (input) => {
    setInput(input);
  }
  
  useEffect(() => {
    if (adListDefault) {
      const filtered = adListDefault.filter(jobAd => {
       return jobAd.addTitle.toLowerCase().includes(input.toLowerCase());
      });
      
      setAdList(filtered);
    }
  } , [input])

  useEffect( () => {
    fetchData()
  },[]);
	
  return (
    <>      
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      
      <AdSearchList adList={adList}/>
    </>
   );
}

export default SearchPage










// old version below

// import React from 'react';


// const SearchPage = () => {
//     return (        
//            <div className="justify-content-center">
//           <form className="App__Searchpage" action="">            
//            <input type="text" placeholder="search"></input>
//             <button>Find Jobs</button>
//             <input type="text" placeholder="search"></input>
//             <button>Add a Location</button>
//           </form>
//           </div> 
        
//     )
// }

// export default SearchPage;
