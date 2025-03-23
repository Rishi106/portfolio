import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Project from "./route/Project";
import Skills from "./route/Skills";
import Education from "./route/Education";
import Contact from "./route/Contact";
   function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
     <Route path="/skills" element={<Skills/>}/>
    <Route path="/education" element={<Education/>}/>
     <Route path="/contect" element={<Contact/>}/>
    </Routes>
   </>
  );
}

export default App;
