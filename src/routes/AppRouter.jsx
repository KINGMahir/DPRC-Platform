import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import ResearchHub from "../pages/ResearchHub";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<ResearchHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}