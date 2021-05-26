import './App.css';
import SidebarLeft from './components/SidebarLeft';
import Singlejobadd from './components/Singlejobadd';
import Jobadds from './components/Jobadds';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchfield from './components/Searchfield';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
// import Jobaddstry from './components/Jobadds_try'

const url = "http://localhost:5000/jobadds"





function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    setLoader(true);
    await Axios.get(url)
    .then((response) => setData(response.data.data))
    .catch((error) => console.log(error));
    setLoader(false)
  }
  console.log(data)

  return (
    <div className="App">
      <Header />
      <Searchfield /> 
      {/* <Jobaddstry />    */}
      <div className="App__Main--wrapper">
      <SidebarLeft />
      <Link to="/">Home</Link>{" "}
              <Link to="/Message/:id">Message</Link>{" "}
              <Switch>
                <div>
                <Route exact path="/message/:id">               
                    <Singlejobadd data={data} loader={loader}/>
                    
                  </Route>
                  <Route exact path="/">
                   <Jobadds data={data} loader={loader}/>
                  </Route>                
                </div>
              </Switch>
      
      </div> 
      <Footer />                  
    </div>
  );
}

export default App;


