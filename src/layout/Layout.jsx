import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-blue-900 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <Link to="/" className="text-xl font-bold tracking-wide md:text-3xl">
            DPRC Research Hub
          </Link>

          <nav className="flex flex-wrap gap-3 md:gap-6">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/research" className="hover:text-yellow-400">Research</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
