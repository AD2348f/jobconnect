import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import handlefilter from './SearchPage'

const SearchBar = ({input:keyword, onChange:setKeyword}) => {    

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};



  return (
    // <form>
    // <input     
    // //  style={BarStyling}
    //  key="random1"
    //  value={keyword}
    //  placeholder={"search Jobs"}
    //  onChange={(e) => setKeyword(e.target.value)}     
    // /> 
    // </form>
    <>
    {/* <Form.Control
     key="random1"
     value={keyword}
     placeholder={"search Jobs"}
     onChange={(e) => setKeyword(e.target.value)}     
    /> */}

    <InputGroup className="mb-3">
    <Form.Control
      placeholder="search Jobs"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      key="random1"
      value={keyword}      
      onChange={(e) => setKeyword(e.target.value)} 
    />
    {/* <Button variant="outline-secondary" id="button-addon2" onClick={handlefilter}>
      Search
    </Button> */}
  </InputGroup>
    </>
  );
}

export default SearchBar;



