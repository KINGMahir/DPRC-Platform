import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import AppBackground from "../shared/layout/AppBackground";

export default function Layout() {
  return (
    <AppBackground>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </AppBackground>
  );
}