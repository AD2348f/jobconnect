import React, { useState, component } from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const options = [
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' },
];

function DropCat() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container className="justify-content-md-center">
    <Row className="justify-content-md-center">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </Row>
    </Container>
  );
}

export default DropCat;