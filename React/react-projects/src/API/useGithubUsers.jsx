import {useState, useEffect} from 'react'

export default function useGithubUsers () {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    // A cada renderização
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/search/users?q=${query}`, { method: "GET"}).then(req => {
            return req.json();
        }).then(data => {
            setResults(data.items)
        })
    },[query])
    return {
        query,
        setQuery,
        setLoading,
        results,
        loading,
    }
}