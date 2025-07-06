import { useState } from "react";
import "./FlashBar.css"; 

function FlashBar({ children }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div id="flash-bar">
      <span>{children}</span>

      <button
        className="flash-close"
        aria-label="Close announcement"
        onClick={() => setVisible(false)}
      >
        &times;
      </button>
    </div>
  );
}

export default FlashBar;
