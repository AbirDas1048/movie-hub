import { Link } from "react-router"

function Hero() {
    return (
        <section className="relative flex min-h-[600px] items-center overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
                <div className="max-w-3xl">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                        Welcome to Movie Hub
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                        Discover Your Next
                        <span className="block text-red-500">
                            Favorite Movie
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        Explore movies from around the world, discover new titles,
                        and find something exciting to watch.
                    </p>

                    <div className="mt-8">
                        <Link
                            to="/movies"
                            className="inline-flex rounded-lg bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                        >
                            Explore Movies
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero