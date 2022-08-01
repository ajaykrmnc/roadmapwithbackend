import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [root,setRoot]=useState('');

  useEffect(() => {

    const getTree=async() => {
      await axios.get(url)
      .then(async(Tree) => {
        console.log(Tree.data);

        await axios.get(`https://devlopermap.herokuapp.com/tree/${Tree.data._id}/${Tree.data.root}`)
        .then(res=> 
        {
           setRoot(res.data._id);

           
        })

        setData(Tree);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    };
    getTree();

  }, [url])

  return { data,root, isPending, error };
}
 
export default useFetch;