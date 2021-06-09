import React from "react";
import useUsers from '../hooks/useUsers';
import Card from 'react-bootstrap/Card'
import isLoggedIn from '../AuthContext'

const User = () => {
 
const [users] = useUsers();
console.log(isLoggedIn)
  return (  
    <div className='App'>
      {/* <SidebarLeft /> */}
      {/* <DropCat /> */}
        {users.map((user) => (
            <Card key={user._id} style={{ width: '90rem' }} className="m-3">
              <Card.Body className="ml-5">
                <Card.Title>{user.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                <Card.Text>
                  {user.role}    
                </Card.Text>                    
              </Card.Body>
            </Card>
        ))} 
    </div>
  );
 };

export default User;