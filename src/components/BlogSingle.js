import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import blog from '../pictures/blog_banner1.jpg'


import React from 'react'

const BlogSingle = () => {


    return (
        <Form>
            <Card style={{ width: '90rem' }} className="m-3">
                <Card.Body >
                    <Card.Title>Why Everyone Should Learn To Code</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted m-3">- published by Ella Patenall</Card.Subtitle>
                    <img src={blog} className="blog"></img>
                    
                    <Card.Text className="my-3">
                    Coding can lead to software development jobs
                    <br></br>
                    <br></br>
                    Coding is the fundamental skill for jobs such as software development. There is currently a shortage of software developers worldwide, 
                    <br></br>
                    so learning to code can be an easy route into an open field of work. However, this isn’t the only way coding can open up job opportunities.
                    <br></br>
                    <br></br>
                    It opens up other job opportunities
                    <br></br>
                    <br></br>
                    For smaller start-ups, hiring someone solely to take care of coding and web design may not be the most economically viable choice. 
                    <br></br>
                    Having coding as a string to your bow can be key to finding jobs related to the field (like content creation, marketing, PR and more).
                    <br></br>
                    <br></br>
                    Coding can make your job application stand out
                    <br></br>
                    <br></br>
                    Even if you’re applying for a position which has no direct relevancy to coding, it’s still well known as a useful skill. 
                    <br></br>
                    Thus, by having any knowledge of it, you’ll automatically give yourself a foot up on the competition. On top of it being a generally 
                    <br></br>
                    worthwhile skill in most jobs, it also shows that you’re hardworking, dynamic, and a self-starter.
                    <br></br>
                    <br></br>
                    Coding literacy can help you understand other aspects of tech
                    <br></br>
                    <br></br>
                    Knowledge of coding (or, as some call it, coding literacy) can help in other ways, too. It can mean you are quicker to learn other aspects or tech, 
                    <br></br>
                    plus mean you are more digitally fluent. In today’s ever more digital job market, this can only be of benefit.
                    <br></br>
                    <br></br>
                    It could lead to freelance work
                    <br></br>
                    <br></br>
                    If you’re wanting to go freelance, or have the ability to work while traveling, coding may be a great way to get into this. As coding is a highly valued skill at the moment, 
                    <br></br>
                    many companies are willing to outsource the work. This means skilled coders have the ability to create their own schedule (and charge a nice rate for it at the same time).
                    <br></br>
                    <br></br>
                    Coding can allow you to pursue passion projects
                    <br></br>
                    <br></br>
                    Coding is a fantastic skill for you if you’re the sort of person who has tons of ideas and wants to get started on everything yesterday. 
                    <br></br>
                    Not having to look elsewhere for a coder saves both time and money, plus it means you can keep changing and redesigning as your idea develops.
                    <br></br>
                    <br></br>
                    Coding can boost problem solving and logic skills
                    <br></br>
                    <br></br>
                    Outside from the implications of coding which look good on a resume, coding actually does boost skills which are actually useful to most jobs. 
                    <br></br>
                    Problem solving and logic are the main two. Learning to code is like an exercise session for the “left” side of the brain.
                    <br></br>
                    <br></br>
                    Coding improves interpersonal skills
                    <br></br>
                    <br></br>
                    Coding for most big projects tends to be a collaborative effort. This means having to work as one cog as part of a greater team. 
                    <br></br>Learning how to best interact with bosses and co-workers is an essential work skill, and it can often be developed through coding.
                    <br></br>
                    <br></br>
                    Being a skilled coder can build confidence
                    <br></br>
                    <br></br>
                    Knowing you have a desirable skill in a competitive job market can help you become more confident in your own abilities. 
                    <br></br>
                    It’s also quite an addictive process – the more you learn, the more you’ll want to learn. Knowing that any problem which could stump most people is easily solved by you is empowering.
                    <br></br>
                    <br></br>
                    Anyone can do it
                    <br></br>
                    <br></br>
                    Unlike a lot of items on a position’s person specification, like a university degree, pretty much anyone can learn to code. It doesn’t take several years or cost thousands. In fact, it can pretty much be done online and from the comfort of your own home, and can be learned flexibly around your other commitments.
                    </Card.Text>    
                    <Card.Text>
                        #Hashtag
                    </Card.Text>    
                </Card.Body>
            </Card>   

            <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '50rem' }} className="m-3">
                <Form.Label>Write a Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="m-3" as="input" type="submit" value="Submit" />{' '}
        </Form>
    )
}

export default BlogSingle
