import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const sidebarLeft = () => {
    return (
          <Container className="justify-content-md-center">
          <Row>
            <Form>
              <Form.Row className="justify-content-md-center">
                <Col xs="auto" className="my-1">
                  <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Working Time
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                  >
                  <option value="0">Working Time</option>
                  <option value="1">Fulltime</option>
                  <option value="2">Part-Time</option>
                  <option value="3">Remote/Home Office</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1 mx-4">
                  <Button type="submit">Change</Button>
                </Col>
              </Form.Row>
            </Form>



<Form>
  <Form.Row>
    <Col xs="auto" className="my-1">
      <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Tech Stack
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Techstack</option>
        <option value="1">React</option>
        <option value="2">JavaScript</option>
        <option value="3">CSS</option>
        <option value="4">HtmL</option>
        <option value="5">Ruby</option>
        <option value="6">Python</option>
        <option value="7">Next</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1 mx-4">
      <Button type="submit">Change</Button>
    </Col>
  </Form.Row>
</Form>



<Form>
  <Form.Row>
    <Col xs="auto" className="my-1">
      <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Work Type
      </Form.Label>
      <Form.Control        
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Contract Type</option>
        <option value="1">Unlimited</option>
        <option value="2">Limited</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1 mx-4">
      <Button type="submit">Change</Button>
    </Col>
  </Form.Row>
</Form>
</Row>
</Container>
    )
}

export default sidebarLeft;
