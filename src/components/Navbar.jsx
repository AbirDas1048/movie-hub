import { useState } from 'react'
import { Link } from 'react-router'
import { Clapperboard, Menu, X } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-white/10 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-4">
                    <Link to="/" className="flex items-center gap-4">
                        <img
                            src="/logo.png"
                            alt="Movie Hub"
                            className="h-10 w-auto"
                        />

                        <div className="hidden border-l border-white/10 pl-4 md:block">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold leading-tight text-white">
                                    Movie Hub
                                </p>
                            </div>

                            <p className="mt-1 text-[10px] font-medium tracking-[0.18em] text-gray-500">
                                YOUR ULTIMATE CINEMATIC DESTINATION
                            </p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-6 md:flex">
                        <Link
                            to="/"
                            className="text-gray-300 transition hover:text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movies"
                            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                        >
                            Movies
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="flex flex-col gap-4 pb-5 md:hidden">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movies"
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg bg-red-600 px-5 py-2 text-center font-medium text-white"
                        >
                            Movies
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar