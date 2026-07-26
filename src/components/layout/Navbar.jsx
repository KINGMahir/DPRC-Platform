import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:p-6">
        <Link to="/" className="text-xl font-bold tracking-wide md:text-3xl">
          DPRC Research Hub
        </Link>

        <nav className="flex flex-wrap gap-3 md:gap-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/research" className="hover:text-yellow-400">
            Research
          </Link>
        </nav>
      </div>
    </header>
  );
}