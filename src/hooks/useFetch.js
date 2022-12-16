// fetching backend
import { useEffect, useState} from 'react'

function useFetch(url) {
    const [list, setList] = useState([])

      
    useEffect(() => {
        if (url === "") {
            return;
        }
    const getPosts = async () => {
        const response = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json"}, 
        })
        const data = await response.json();
        console.log(data)
        setList(data.payload);
    };
    getPosts();
}, [url])

return [list]
}

export default useFetch;