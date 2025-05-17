export default function Navbar() {
    return(
        <header className="fixed top-0 w-full bg-[#110f29] text-white shadow-md z-50">
            <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
                {/* Logo/ Name */}
                <a href="#top" className="text-2xl font-bold tracking-wide hover:opacity-80 transition">
                    Damian Szydlowski
                </a>

                {/* Nav Links */}
                <ul className="flex space-x-6 text-sm">
                  <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
                  <li> <a href="#projects" className="hover:text-grey-300 transition">Projects</a></li>
                  <li> <a href="#contact" className="hover:text-grey-300 transition">Contact</a></li>
                </ul>
            </nav>
        </header>
    )



}
