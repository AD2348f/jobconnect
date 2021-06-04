import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


const SearchBar = ({input:keyword, onChange:setKeyword, onKeyDown}) => {    

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};



  return (    
    <>
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="search Jobs"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      key="random1"
      value={keyword}      
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={onKeyDown}
    />    
  </InputGroup>
    </>
  );
}

export default SearchBar;



