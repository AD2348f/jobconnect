import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import AdSearchList from './AdSearchList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NoResult from './Noresult';
import SidebarLeft from './SidebarLeft';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const SearchPage = () => {
  const [input, setInput] = useState(''); 
  const [adListDefault, setAdListDefault] = useState();
  const [adList, setAdList] = useState([]);

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
 
  
const handleFilter = () => {
  if (adListDefault) {
    const filtered = adListDefault.filter(jobAd => {      
     return jobAd.addTitle.toLowerCase().includes(input.toLowerCase());
    });    
    setAdList(filtered);
  }
}

const handleReset = () => {
    setInput('');
    fetchData();
    // {handleFilter};    
  }


const onKeyDown = (e) => {
  console.log(e)
  if (e.key === 'Enter') {
    handleFilter()
  }
}

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
              onKeyDown={onKeyDown}     
            />
          </Col>
          <Col>
            <Button variant="outline-secondary" id="button-addon2" onClick={handleFilter}>
              Search
            </Button>
            <Button variant="outline-secondary" id="button-addon2" onClick={handleReset}>
              X
            </Button>
          </Col>          
        </Row>      
        <Row className="justify-content-md-center">
        <SidebarLeft />

          {(adList.length) ? <AdSearchList adList={adList}/> : <NoResult />}
          
        </Row>
      </Container>
    </>
   );
}

export default SearchPage









