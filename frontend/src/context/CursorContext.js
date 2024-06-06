import React, { useState, useEffect, createContext} from 'react'

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  });

  // Cursor background state
  const [cursorBG, setCursorBG] = useState("default");

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    // Removing Event Listener
    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  console.log(cursorPos)

  // Cursor Variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "0E1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#FFF",
      mixBlendMode: "difference",
    },
  };


  // Mouse Enter Handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  }

  // Mouse Leave Handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  }

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaveHandler
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider