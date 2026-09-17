import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieDetailsModal from '../components/MovieDetailsModal'

import { useMovies } from '../context/MovieContext'
import { Clapperboard } from 'lucide-react'

function Movies() {
    const {
        displayedMovies,
        searchTerm,
        loading,
        error,
    } = useMovies()

    const [selectedMovie, setSelectedMovie] = useState(null)

    return (
        <>
            <section className="mx-auto max-w-7xl px-6 pb-10 pt-12">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                        Explore
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                        Discover Movies
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Search through thousands of shows and discover your
                        next favorite story.
                    </p>
                </div>

                <SearchBar />
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-16">
                {loading ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-red-500" />

                            <p className="mt-4 text-gray-400">
                                Loading movies...
                            </p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
                        <p className="text-red-400">
                            {error}
                        </p>
                    </div>
                ) : displayedMovies.length === 0 ? (
                    <div className="py-20 text-center">
                        <div className="flex justify-center">
                            <Clapperboard
                                size={48}
                                className="text-red-500"
                            />
                        </div>

                        <h2 className="mt-5 text-2xl font-semibold text-white">
                            No movies found
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Try searching for another movie title.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                {searchTerm
                                    ? `Search results for "${searchTerm}"`
                                    : 'All Movies'}
                            </h2>

                            <span className="text-sm text-gray-500">
                                {displayedMovies.length} results
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {displayedMovies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onSeeDetails={setSelectedMovie}
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>

            <MovieDetailsModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />
        </>
    )
}

export default Movies