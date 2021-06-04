import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import AdSearchList from './AdSearchList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NoResult from './Noresult';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const SearchPage = () => {
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
 
  
const handlefilter = () => {
  if (adListDefault) {
    const filtered = adListDefault.filter(jobAd => {      
     return jobAd.addTitle.toLowerCase().includes(input.toLowerCase());
    });    
    setAdList(filtered);
  }
}

// const handleKeyDown = (event) => {
//   if (event.key === 'Enter') {
//     {handlefilter}
//   }
// }



// const handlempty = () => {
//   if (adList.length!===0) {
//     {console.log('noooooooooooo')}
//      return(<NoResult />)
//   } 
// }



  

  useEffect( () => {
    fetchData()
  },[]);
	
  return (
    <>  
      <Container className="justify-content-md-center">   
        <Row className="my-3">
          <Col></Col>
          <Col>
            <SearchBar 
              input={input} 
              onChange={updateInput} 
              //  onKeyDown={handleUserKeyPress}     
            />
          </Col>
          <Col>
            <Button variant="outline-secondary" id="button-addon2" onClick={handlefilter}>
              Search
            </Button>
          </Col>          
        </Row>      
        <Row className="justify-content-md-center">
          <AdSearchList adList={adList}/>
        </Row>
      </Container>
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
