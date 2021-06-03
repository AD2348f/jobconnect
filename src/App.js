// import './App.css';
import Singlejobadd from './components/Singlejobadd';
import Jobadds from './components/Jobadds';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Blog from './components/Blog';
import Register from './components/Register';
import { Link, Route, Switch } from "react-router-dom";
import CreateAdd from './components/Createadd';
import AboutUs from './components/AboutUs';
import LegalInfo from './components/LegalInfo';
import GDPR from './components/GDPR';
import SearchPage from './components/SearchPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {  
  return (
    <div className="App">
      <Header />  
      <Container className="mx-auto">
  <Row className="mx-auto">    
        
  </Row>  
  <Row className="justify-content-md-center">
        <Switch>
            <Route exact path="/jobadd/:id">               
              <Singlejobadd />                    
            </Route>
            <Route exact path="/">
             {/* <Jobadds /> */}
             <SearchPage />
            </Route>
            <Route exact path="/createadd">
             <CreateAdd />
            </Route>
            <Route exact path="/Login">
             <Login />
            </Route>
            <Route exact path="/Register">
             <Register />
            </Route>
            <Route exact path="/Blog">
             <Blog />
            </Route>
            <Route exact path="/AboutUs">
             <AboutUs />
            </Route>
            <Route exact path="/LegalInfo">
             <LegalInfo />
            </Route>
            <Route exact path="/GDPR">
             <GDPR />
            </Route>
        </Switch>  
        </Row> 
        <Row className="justify-content-md-center">    
      <Footer />  
      </Row>
      </Container>               
    </div>       
  );
}
export default App;