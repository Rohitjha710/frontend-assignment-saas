import { useState,useEffect } from "react"
const useFetch = (url) => {
    const [projects,setProjects] = useState([]);
    const [isFetching,setFetching] =useState(true);
    const [isError,setError] =useState(false);
    useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {setProjects(data);setFetching(false);})
            .catch(e=>{setProjects([]);setFetching(false);setError(true)})
      }, [])

  return (
    {isFetching,projects,isError}
  )
}

export default useFetch