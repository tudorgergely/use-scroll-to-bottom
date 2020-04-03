import React, { useState } from "react";
import { useScrollToBottom } from "use-scroll-to-bottom";
import "./ReuseRefExample.css";

export default function ReuseRefExample() {
  const [setBottomRef, isBottom] = useScrollToBottom();
  const [targetFirst, setTargetFirst] = useState(true);

  return (
    <div>
      <h1>Is bottom {isBottom + ""}</h1>
      <button
        data-testid="toggle-target"
        onClick={() => setTargetFirst(!targetFirst)}
      >
        Targeting {targetFirst ? "First" : "Second"}
      </button>

      <hr />

      <h3>First </h3>
      <div className="simple-container">
        <div className="big-element" />
        <div
          data-testid="bottom-1"
          data-active={targetFirst && isBottom}
          ref={targetFirst ? setBottomRef : null}
        >
          Bottom 1
        </div>
      </div>

      <hr />
      <h3>Second </h3>
      <div className="simple-container">
        <div className="big-element" />
        <div
          data-testid="bottom-2"
          data-active={!targetFirst && isBottom}
          ref={targetFirst ? null : setBottomRef}
        >
          Bottom 2
        </div>
      </div>
    </div>
  );
}
