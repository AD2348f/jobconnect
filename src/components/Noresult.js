import Card from 'react-bootstrap/Card'



const NoResult = () => { 


  return (
    <div>                  
      <Card style={{ width: '90rem' }}>
          <Card.Body>
            <Card.Title>No result</Card.Title>            
            <Card.Text>
            Your search has no result    
            </Card.Text>                          
          </Card.Body>
      </Card>  
    </div>
      )  
}



export default NoResult;