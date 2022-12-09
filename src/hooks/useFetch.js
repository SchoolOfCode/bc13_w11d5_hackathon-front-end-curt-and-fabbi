// fetching backend
import {useState, useEffect} from 'react'

function useFetch(url) {
    const [data, setData]= useState("");

    useEffect(() => {
        if (url === "") {
            return;
        }
    const getPosts = async () => {
        const response = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json"}, 
        })
        const list = await response.json();
        setData(list);
    };
    getPosts();
}, [url])

return [data]
}

export default useFetch;