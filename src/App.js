import './App.css';
import SidebarLeft from './components/SidebarLeft';
import Singlejobadd from './components/Singlejobadd';
import Jobadds from './components/Jobadds';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Link to="/">Home</Link>
          <Link to="/createadd">Create ad</Link>

        {/* <Link to="/jobadd/:id">Message</Link>{" "}
        <Link to="/createadd">createadd</Link>{" "} */}
        <Switch>
          <div>
            <Route exact path="/jobadd/:id">               
              <Singlejobadd />                    
            </Route>
            <Route exact path="/">
             <Jobadds />
            </Route>
            <Route exact path="/createadd">
             <CreateAdd />
            </Route> 
          </div>
        </Switch>      
      </div> 
      <Footer />                  
    </div>    
  );
}

export default App;