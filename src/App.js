import './App.css';
import SidebarLeft from './components/SidebarLeft';
import Singlejobadd from './components/Singlejobadd';
import Jobadds from './components/Jobadds';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Searchfield from './components/Searchfield';
import { Link, Route, Switch } from "react-router-dom";
import CreateAdd from './components/Createadd';


function App() {  
  return (
    <div className="App">
      <Header />
      <Searchfield />       
      <div className="App__Main--wrapper">
      <SidebarLeft />
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
             
          </div>
        </Switch>      
      </div> 
      <Footer />                  
    </div>    
  );
}

export default App;