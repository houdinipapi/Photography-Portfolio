import React, { useState, useEffect, createContext} from 'react'

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  });

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
  }

  return (
    <CursorContext.Provider
      value={{ cursorVariants }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider