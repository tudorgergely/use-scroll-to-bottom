import React from "react";

import "@testing-library/jest-dom";
import { render, getByTestId } from "@testing-library/react";
import SimpleExample from "./SimpleExample";
import { setupIntersectionObserverMock } from "../../../test/utils";

describe("Simple useScrollToBottom test", () => {
  it("calls observe", () => {
    const observe = jest.fn();
    setupIntersectionObserverMock({ observe });

    const { container } = render(<SimpleExample />);

    expect(getByTestId(container, "big-element")).toHaveStyle(
      "background: green"
    );
    expect(observe).toHaveBeenCalled();
  });

  it("background changes after intersection", () => {
    const setCallback = callback => {
      callback([{ isIntersecting: true }]);
    };

    setupIntersectionObserverMock({ setCallback });

    const { container } = render(<SimpleExample />);

    expect(getByTestId(container, "big-element")).toHaveStyle(
      "background: grey"
    );
  });

  it("background doesn't change if no intersection", () => {
    const setCallback = callback => {
      callback([{ isIntersecting: false }]);
    };

    setupIntersectionObserverMock({ setCallback });

    const { container } = render(<SimpleExample />);

    expect(getByTestId(container, "big-element")).toHaveStyle(
      "background: green"
    );
  });
});
