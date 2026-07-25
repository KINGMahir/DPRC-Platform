import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gradient-to-br from-blue-950 to-blue-700 text-white px-4 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
      >
        Welcome to DPRC
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-sm md:text-lg text-blue-100 max-w-md mb-10 mx-auto"
      >
        Applied Engineering Research & Innovation Platform — discover cutting-edge projects, publications, and collaborations.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00e0ff" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/research")}
        className="relative w-24 md:w-32 h-24 md:h-32 rounded-full bg-blue-500 font-bold text-xl md:text-2xl shadow-lg transition-all duration-300"
      >
        DPRC
        <span className="absolute inset-0 rounded-full border-4 border-cyan-400 blur-md opacity-75 animate-pulse"></span>
      </motion.button>
    </div>
  );
}
