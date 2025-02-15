import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
 import About from "./routes/About";
 import Contect from "./routes/Contect"
 import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
   function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contect" element={<Contect/>}/>
      <Route path="/skills" element={<Skills/>}/>
           </Routes>
   </>
  );
}

export default App;
