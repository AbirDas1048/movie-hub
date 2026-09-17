import { CalendarDays, Star, Tags, X } from 'lucide-react'

function MovieDetailsModal({ movie, onClose }) {
    if (!movie) {
        return null
    }

    const rating = movie.rating?.average ?? 'N/A'

    const releaseDate = movie.premiered
        ? new Date(movie.premiered).toLocaleDateString()
        : 'N/A'

    const summary = movie.summary
        ? movie.summary.replace(/<[^>]*>/g, '')
        : 'No description available.'

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-red-600"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {/* Image */}
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-zinc-950 px-6 py-8 sm:min-h-[400px]">
                    {movie.image?.medium ? (
                        <img
                            src={movie.image.medium}
                            alt={movie.name}
                            className="h-auto max-h-[600px] w-full object-contain"
                        />
                    ) : (
                        <div className="flex h-[280px] items-center justify-center text-gray-500">
                            No Image Available
                        </div>
                    )}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                    <h2 className="text-3xl font-bold text-white">
                        {movie.name}
                    </h2>

                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-300">
                        <span className="flex items-center gap-2">
                            <Star size={16} className="text-yellow-400" />
                            Rating:
                            <span className="font-medium text-white">
                                {rating}
                            </span>
                        </span>

                        <span className="hidden text-gray-600 sm:inline">|</span>

                        <span className="flex items-center gap-2">
                            <CalendarDays size={16} className="text-red-400" />
                            Release:
                            <span className="font-medium text-white">
                                {releaseDate}
                            </span>
                        </span>

                        {movie.genres?.length > 0 && (
                            <>
                                <span className="hidden text-gray-600 sm:inline">|</span>

                                <span className="flex items-center gap-2">
                                    <Tags size={16} className="text-blue-400" />
                                    Genres:
                                    <span className="font-medium text-white">
                                        {movie.genres.join(', ')}
                                    </span>
                                </span>
                            </>
                        )}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-white">
                            Overview
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            {summary}
                        </p>
                    </div>

                    {movie.network?.name && (
                        <div className="mt-5 text-sm text-gray-400">
                            <span className="font-medium text-white">
                                Network:
                            </span>{' '}
                            {movie.network.name}
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={onClose}
                        className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsModal