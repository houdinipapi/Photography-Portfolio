// import React, { useContext } from "react";
import React from "react"

import Header from "./components/Header"
import AnimRoutes from "./components/AnimRoutes"

import { BrowserRouter as Router } from "react-router-dom"

import { motion } from "framer-motion"
// import { CursorContext } from "./context/CursorContext";

const App = () => {
  // console.log(useContext(CursorContext));

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>

      {/* Cursor */}
      <div className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50">

      </div>
    </>
  )
}

export default App;
