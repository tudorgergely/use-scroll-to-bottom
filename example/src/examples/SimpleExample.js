import React from 'react';
import {useScrollToBottom} from 'use-scroll-to-bottom'
import './SimpleExample.css';

export default function SimpleExample() {
  const [bottomRef, isBottom] = useScrollToBottom();

  return (
    <div className="simple-container">
      <div className="big-element" style={{background: isBottom ? 'grey' : 'green'}}>
        {isBottom && "Bottom reached"}
      </div>
      <div ref={bottomRef}>Bottom</div>
    </div>
  )
}
