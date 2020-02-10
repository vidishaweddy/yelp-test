import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async(setTerm) => {
      try {
          const response = await yelp.get('/search', {
              params: {
                  term: setTerm,
                  limit: 50,
                  location: 'san jose'
              }
          });
          setResults(response.data.businesses);
      } catch(e) {
        console.log(e);
          setErrorMessage('Something went wrong!')
      }
  }

  useEffect(() => {
      searchApi('pasta')
  }, []);

  return [searchApi, results, errorMessage];
}