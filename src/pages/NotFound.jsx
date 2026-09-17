import { Link } from "react-router";
import { Film } from "lucide-react";

function NotFound() {
    return (
        <main className="flex flex-1 items-center justify-center px-6 py-16">
            <div className="w-full max-w-2xl text-center">
                <div className="relative mx-auto w-fit">
                    <div className="text-[110px] font-black leading-none tracking-tighter text-zinc-800 sm:text-[180px]">
                        404
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-red-500 sm:text-sm">
                            Opps! Page Not Found
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <img
                        src="/logo.png"
                        alt="Movie Hub"
                        className="w-64 sm:w-80 md:w-96 lg:w-[28rem]"
                    />
                </div>

                <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                    Sorry, this page is not available
                </h1>

                <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-400">
                    The page you are looking for may have been removed, renamed, or is
                    temporarily unavailable.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/movies"
                        className="rounded-xl border border-white/10 bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
                    >
                        Explore Movies
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default NotFound;
