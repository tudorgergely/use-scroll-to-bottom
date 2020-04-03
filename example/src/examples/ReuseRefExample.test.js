import React from "react";

import "@testing-library/jest-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ReuseRefExample from "./ReuseRefExample";
import { setupIntersectionObserverMock } from "../../../test/utils";

describe("Simple useScrollToBottom test", () => {
  it("calls observe", () => {
    const observe = jest.fn();
    setupIntersectionObserverMock({ observe });

    render(<ReuseRefExample />);

    expect(observe).toHaveBeenCalled();
  });

  it("calls observe after toggle", () => {
    const observe = jest.fn();
    setupIntersectionObserverMock({ observe });

    const { container } = render(<ReuseRefExample />);

    expect(observe).toHaveBeenCalled();

    fireEvent.click(getByTestId(container, "toggle-target"));

    expect(observe).toHaveBeenCalled();
  });

  it("sets active first button", () => {
    const setCallback = callback => callback([{ isIntersecting: true }]);

    setupIntersectionObserverMock({ setCallback });

    const { container } = render(<ReuseRefExample />);

    expect(
      container.querySelector("[data-testid=bottom-1][data-active=true]")
    ).not.toBeNull();
  });

  it("sets active second button after toggle", () => {
    const setCallback = callback => callback([{ isIntersecting: true }]);

    setupIntersectionObserverMock({ setCallback });

    const { container } = render(<ReuseRefExample />);

    expect(
      container.querySelector("[data-testid=bottom-1][data-active=true]")
    ).not.toBeNull();
    expect(
      container.querySelector("[data-testid=bottom-2][data-active=true]")
    ).toBeNull();

    fireEvent.click(getByTestId(container, "toggle-target"));

    expect(
      container.querySelector("[data-testid=bottom-1][data-active=true]")
    ).toBeNull();
    expect(
      container.querySelector("[data-testid=bottom-2][data-active=true]")
    ).not.toBeNull();
  });

  it("none are active if no intersection", () => {
    const setCallback = callback => callback([{ isIntersecting: false }]);

    setupIntersectionObserverMock({ setCallback });

    const { container } = render(<ReuseRefExample />);

    expect(
      container.querySelector("[data-testid=bottom-1][data-active=true]")
    ).toBeNull();
    expect(
      container.querySelector("[data-testid=bottom-2][data-active=true]")
    ).toBeNull();

    fireEvent.click(getByTestId(container, "toggle-target"));

    expect(
      container.querySelector("[data-testid=bottom-1][data-active=true]")
    ).toBeNull();
    expect(
      container.querySelector("[data-testid=bottom-2][data-active=true]")
    ).toBeNull();
  });
});
