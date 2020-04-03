import React from "react";
import { useScrollToBottom } from "use-scroll-to-bottom";
import "./SimpleExample.css";

export default function SimpleExample() {
  const [setBottomRef, isBottom] = useScrollToBottom();

  return (
    <div className="simple-container">
      <div
        data-testid="big-element"
        className="big-element"
        style={{ background: isBottom ? "grey" : "green" }}
      >
        {isBottom && "Bottom reached"}
      </div>
      <div ref={setBottomRef}>Bottom</div>
    </div>
  );
}
