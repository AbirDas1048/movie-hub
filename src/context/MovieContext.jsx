import { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const [searchTerm, setSearchTerm] = useState('')
    const [searchInput, setSearchInput] = useState('')

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch all shows
    const fetchMovies = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch('https://api.tvmaze.com/shows')

            if (!response.ok) {
                throw new Error('Failed to fetch movies')
            }

            const data = await response.json()

            setMovies(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    // Search shows
    const searchMovies = async (query) => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(
                `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
            )

            if (!response.ok) {
                throw new Error('Failed to search movies')
            }

            const data = await response.json()

            const shows = data.map((item) => item.show)

            setSearchResults(shows)
            setSearchTerm(query)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    // Only called when Search button is clicked
    const handleSearch = () => {
        const query = searchInput.trim()

        if (!query) {
            return false
        }

        searchMovies(query)

        return true
    }

    // Clear search
    const clearSearch = () => {
        setSearchInput('')
        setSearchTerm('')
        setSearchResults([])
        setError(null)
    }

    const displayedMovies =
        searchTerm.trim() === ''
            ? movies
            : searchResults

    return (
        <MovieContext.Provider
            value={{
                movies,
                searchResults,
                searchTerm,
                searchInput,
                setSearchInput,
                displayedMovies,
                loading,
                error,
                handleSearch,
                clearSearch,
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export function useMovies() {
    return useContext(MovieContext)
}