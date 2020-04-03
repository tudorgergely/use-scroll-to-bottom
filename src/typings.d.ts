import * as React from "react";

declare function useScrollToBottom<T extends Element>(): [
  React.RefCallback<T>,
  boolean
];
