// import './App.css';
import Singlejobadd from './components/Singlejobadd';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Blog from './components/Blog';
import Register from './components/Register';
import { Route, Switch } from "react-router-dom";
import CreateAdd from './components/Createadd';
import AboutUs from './components/AboutUs';
import LegalInfo from './components/LegalInfo';
import GDPR from './components/GDPR';
import SearchPage from './components/SearchPage';
import LandingPage from './components/LandingPage'
import User from './components/User'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Col from 'react-bootstrap/Col'
import AreaDev from './components/AreaDev'
import AreaComp from './components/AreaComp'
import AreaBoot from './components/AreaBoot'

import RegisterDev from './components/RegisterDev'
import RegisterComp from './components/RegisterComp'
import RegisterBoot from './components/RegisterBoot'

import BlogSingle from './components/BlogSingle'
import BlogSingleOne from './components/BlogSingleOne'
import BlogSingleTwo from './components/BlogSingleTwo'
import BlogSingleThree from './components/BlogSingleThree'

import ProtectedRoute from './components/ProtectedRoute'





function App() {  
  return (
    <div className="App">
      <Header />  
      <Container className="mx-auto">
  <Row className="mx-auto">    
  
        
  </Row>  
  <Row className="justify-content-md-center">
  
        <Switch>
            <ProtectedRoute path="/AreaDev" component={AreaDev} />   
            <ProtectedRoute path="/AreaComp" component={AreaComp} /> 
            <ProtectedRoute path="/AreaBoot" component={AreaBoot} />
            <Route exact path="/jobadd/:id">               
              <Singlejobadd />                    
            </Route>
            <Route exact path="/">             
             <LandingPage />             
            </Route>
            <Route exact path="/search">             
             <SearchPage />
            </Route>
            <Route exact path="/user">             
             <User />
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
            <Route exact path="/BlogSingle">
             <BlogSingle />
            </Route>
            <Route exact path="/BlogSingleOne">
             <BlogSingleOne />
            </Route>
            <Route exact path="/BlogSingleTwo">
             <BlogSingleTwo />
            </Route>
            <Route exact path="/BlogSingleThree">
             <BlogSingleThree />
            </Route>
            <Route exact path="/AreaDev">
             <AreaDev />
            </Route>
            <Route exact path="/AreaComp">
             <AreaComp />
            </Route>
            <Route exact path="/AreaBoot">
             <AreaBoot />
            </Route>
            <Route exact path="/RegisterDev">
             <RegisterDev />
            </Route>
            <Route exact path="/RegisterComp">
             <RegisterComp />
            </Route>
            <Route exact path="/RegisterBoot">
             <RegisterBoot />
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
      
      </Row>
      </Container>  
      <Footer />               
    </div>       
  );
}
export default App;