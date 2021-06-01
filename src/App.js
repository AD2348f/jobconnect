import './App.css';
import Singlejobadd from './components/Singlejobadd';
import Jobadds from './components/Jobadds';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Blog from './components/Blog';
import Register from './components/Register';
import Searchfield from './components/SearchPage';
import { Link, Route, Switch } from "react-router-dom";
import CreateAdd from './components/Createadd';
import AboutUs from './components/AboutUs';
import LegalInfo from './components/LegalInfo';
import GDPR from './components/GDPR';
import SearchPage from './components/SearchPage';



function App() {  
  return (
    <div className="App">
      <Header />  
      <SearchPage />   
      <div className="App__Main--wrapper">      
        <Switch>
          <div className="justify-content-center">
            <Route exact path="/jobadd/:id">               
              <Singlejobadd />                    
            </Route>
            <Route exact path="/">
             <Jobadds />
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
          </div>
        </Switch>      
      </div> 
      <Footer />                  
    </div>    
  );
}

export default App;