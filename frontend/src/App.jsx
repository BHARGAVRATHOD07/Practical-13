import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

// Lazy-loaded route components
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading UI
function LoadingPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Loading...</h2>
      <p>Please wait while the page loads.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav
        style={{
          padding: "15px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;