import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
      <Nav className="justify-content-center" >
        <Nav.Item>
          <Nav.Link title="Item" href="#/home">
          <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link title="Item">
          <Link to="/createadd">Create ad</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link title="Login">
          <Link to="/Login">Login</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled>
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
// render(<Header />);




export default Header;


 
// const Header = () => {
//     return (
//             <div className="App__Header">
//                 <header>        
//             {/* <h3>header</h3> */}
//             {/* <img></img>
//             <nav>
//             <ul className="App__Navigation">
//                 <li></li>
//                 <li></li>
//                 <li>For Employers</li>
//                 <li>Saved for later</li>
//                 <li>My Profile</li>
//                 <li>Login</li>
//                 <li>Register</li>
//             </ul>
//             </nav> */}

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Job-Connect</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//         <li><Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link></li>
//         </li>
//         <li class="nav-item">
//         <li><Link to="/createadd" class="nav-link" >Create ad</Link></li>          
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//         </header>
//             </div>
//     )
// }
