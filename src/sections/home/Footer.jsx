export default function Footer() {
    return (
      <footer className="bg-gray-950 py-10 text-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              DPRC Platform
            </h3>
  
            <p className="mt-2 text-sm">
              A Collaborative Engineering & Research Operating System.
            </p>
          </div>
  
          <div className="text-sm">
            © {new Date().getFullYear()} DPRC. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }