import { CalendarDays, Star } from "lucide-react"

function MovieCard({ movie, onSeeDetails }) {
	const releaseYear = movie.premiered
		? new Date(movie.premiered).getFullYear()
		: 'N/A'

	const rating = movie.rating?.average ?? 'N/A'

	return (
		<article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-red-500/50">

			{/* Poster */}
			<div className="aspect-[2/3] overflow-hidden bg-zinc-800">
				{movie.image?.medium ? (
					<img
						src={movie.image.medium}
						alt={movie.name}
						className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full items-center justify-center text-gray-500">
						No Poster
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-5">
				<h2 className="truncate text-lg font-semibold text-white">
					{movie.name}
				</h2>

				<div className="mt-3 flex items-center justify-between text-sm text-gray-400">
					<span className="flex items-center gap-2">
						<Star size={16} className="text-yellow-400" />
						{rating}
					</span>

					<span className="flex items-center gap-2">
						<CalendarDays size={16} className="text-red-400" />
						{releaseYear}
					</span>
				</div>

				<button
					type="button"
					onClick={() => onSeeDetails(movie)}
					className="mt-5 w-full rounded-lg bg-red-600 px-4 py-2.5 font-medium text-white transition hover:bg-red-700"
				>
					See Details
				</button>
			</div>
		</article>
	)
}

export default MovieCard