import { useState, useEffect } from 'react';
import axios from 'axios';

function useApi() {
    const [offers, setOffers] = useState([]);
    // const { id } = useParams()

    useEffect(() => {
      const apiUrl = 'http://localhost:5000/'
      const requestJobadds = axios.get(`${apiUrl}jobadds`)
      axios.all(([requestJobadds]))
      .then(([jobaddsData]) => {
        setOffers(jobaddsData.data.data);
        console.log(jobaddsData.data.data)
      })
      .catch(console.log('request failed, useApi'));
    }, [])      
    return offers
  }
  export default useApi;