import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setupIntersectionObserverMock } from "../../test/utils";

it("renders without crashing", () => {
  setupIntersectionObserverMock();
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
