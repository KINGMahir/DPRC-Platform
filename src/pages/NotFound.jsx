import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center text-gray-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
