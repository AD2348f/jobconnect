import {useState, useEffect} from "react";
import Axios from 'axios';

const useApi = () => {
    
    const [jobadds, jobaddsSet] = useState([]);
    const [loader, setLoader] = useState(false);
    const url = "http://localhost:5000/jobadds";
  
    useEffect(() => { fetchJobAdds();
        }, []);
    
    const fetchJobAdds = async() => {
        setLoader(true);
        await Axios.get(url)
        .then((response) => jobaddsSet(response.data.data))
        .catch((error) => console.log(error));
        setLoader(false)
  }   
      
    return [jobadds];
  };

  export default useApi;






