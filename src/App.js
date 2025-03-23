import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";

// Lazy load routes for better performance
const Home = lazy(() => import("./route/Home"));
const About = lazy(() => import("./route/About"));
const Project = lazy(() => import("./route/Project"));
const Skills = lazy(() => import("./route/Skills"));
const Education = lazy(() => import("./route/Education"));
const Contact = lazy(() => import("./route/Contact"));

// Layout Wrapper (optional)
const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/project" element={<Layout><Project /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Suspense>
  );
}

export default App;
