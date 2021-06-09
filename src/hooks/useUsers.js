import {useState, useEffect} from "react";
import Axios from 'axios';

const useUsers = () => {
    
    const [users, usersSet] = useState([]);
    const [loader, setLoader] = useState(false);
    const url = "https://jobconnect-try.herokuapp.com/users";    
  
    useEffect(() => { fetchUsers();
        }, []);
    
    const fetchUsers = async() => {
        setLoader(true);
        await Axios.get(url)
        .then((response) => usersSet(response.data.data))
        .catch((error) => console.log(error));
        setLoader(false)
  }   
      
    return [users];
  };

  export default useUsers;






