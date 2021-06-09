import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
// import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'




const AreaDev = () => {
    return (
        
        <Container className="align-items-center mt-3" style={{ width: '90rem' }}>
            <Card>
                <Card.Body>
                    <Image src="holder.js/171x180" rounded />
                    <Card.Title>John Doe</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Junior Web Developer
                            <br></br>
                            Graduated Pull Stack Dev from SBW Coding School
                        </Card.Subtitle>
                            <Card.Text>
                            Coming from the tourist management sector, I combine my expertise with programming skills
                        </Card.Text>
                </Card.Body>
            </Card>

        <CardColumns className="align-items-center mt-3">
            <Card>
                <Card.Body>
                <Card.Title>Tech Stack</Card.Title>
                    <Card.Text>
                        HTML, CSS, JavaScript, React, Node, MongoDB
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Other Skills</Card.Title>
                    <Card.Text>
                        Leadership, Problem Solving, Teamwork, Sleeping on the Spot
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Languages</Card.Title>
                    <Card.Text>
                        German, English, Klingon
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardColumns>
        <Card>
                <Card.Body>
                    <Card.Title>Previous Experience</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                        Worked as a tourist manager at chainsaw camping inc.
                        <br></br>
                        <span>Tasks: </span>Made sure that everybody's chainsaw worked as intended.
                        </Card.Subtitle>
                </Card.Body>
            </Card>

            <Card className="mt-3 mb-3">
            <Card.Body>
                    <Card.Title>Recently visited</Card.Title>
                        <Card.Text>
                            I was here
                        </Card.Text>
            </Card.Body>
        </Card>
    </Container>
    )
}

export default AreaDev
