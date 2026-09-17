import { useState } from 'react'
import { useMovies } from '../context/MovieContext'
import { Search, X } from 'lucide-react'

function SearchBar() {
    const {
        searchInput,
        setSearchInput,
        handleSearch,
        clearSearch,
    } = useMovies()

    const [validationError, setValidationError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const query = searchInput.trim()

        if (!query) {
            setValidationError(true)
            return
        }

        setValidationError(false)
        handleSearch()
    }

    const handleInputChange = (event) => {
        const value = event.target.value

        setSearchInput(value)

        // Remove validation as soon as user starts typing
        if (value.trim()) {
            setValidationError(false)
        }
    }

    const handleClear = () => {
        clearSearch()
        setValidationError(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-3xl"
        >
            <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                    {/* Search icon */}
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                        <Search size={20} />
                    </span>

                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                        placeholder="Search for a movie..."
                        className={`w-full rounded-xl border bg-zinc-900 py-4 pl-14 pr-12 text-white outline-none transition placeholder:text-gray-500 ${validationError
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-red-500'
                            }`}
                    />

                    {/* Clear button */}
                    {searchInput && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
                            aria-label="Clear search"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* Search button */}
                <button
                    type="submit"
                    className="rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700 sm:px-8"
                >
                    Search
                </button>
            </div>

            {/* Validation message */}
            {validationError && (
                <p className="mt-2 text-sm font-medium text-red-500">
                    Please type any movie title.
                </p>
            )}
        </form>
    )
}

export default SearchBar