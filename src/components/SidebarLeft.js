import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

const sidebarLeft = () => {
    return (
        <div className=".App__Sidebar-links">
        <Form>
  <Form.Row className="align-items-center">
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
        <option value="0">Choose...</option>
        <option value="1">Fulltime</option>
        <option value="2">Part-Time</option>
        <option value="3">Remote/Home Office</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="Remember my preference"
        custom
      />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Change</Button>
    </Col>
  </Form.Row>
</Form>
<Form>
  <Form.Row className="align-items-center">
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
        <option value="0">Choose...</option>
        <option value="1">React</option>
        <option value="2">JavaScript</option>
        <option value="3">CSS</option>
        <option value="4">HtmL</option>
        <option value="5">Ruby</option>
        <option value="6">Python</option>
        <option value="7">Next</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="Remember my preference"
        custom
      />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Change</Button>
    </Col>
  </Form.Row>
</Form>
<Form>
  <Form.Row className="align-items-center">
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
        <option value="0">Choose...</option>
        <option value="1">Unlimited</option>
        <option value="2">Limited</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="Remember my preference"
        custom
      />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Change</Button>
    </Col>
  </Form.Row>
</Form>
</div>
    )
}

export default sidebarLeft;
