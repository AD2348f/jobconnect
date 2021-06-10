import {useState, useEffect, useContext} from "react";
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../AuthContext'

const useLogin = () => {
    const [login, setLogin] = useState();
    const {authToken} = useContext(AuthContext)
    const [loader, setLoader] = useState(false);
    const url = "https://jobconnect-try.herokuapp.com/auth/me";    
  
    useEffect(() => fetchLogin, []);

    
    const fetchLogin = async() => {
        setLoader(true);
        await Axios.get((url),{headers:{Authorization: `Bearer ${authToken}`}})
        .then((response) => setLogin(response.data.data))
        .catch((error) => console.log(error));
        setLoader(false)
  }   
      
    return login;
  };

  export default useLogin;