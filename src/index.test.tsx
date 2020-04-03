import { setupIntersectionObserverMock } from "../test/utils";
import { act, renderHook } from "@testing-library/react-hooks";
import { useScrollToBottom } from "./index";

describe("useScrollToBottom hook", () => {
  it("sets isBottom to false by default", () => {
    setupIntersectionObserverMock();
    const { result } = renderHook(() => useScrollToBottom());

    const [setBottomRef, isBottom] = result.current;
    expect(typeof setBottomRef).toBe("function");
    expect(isBottom).toBe(false);
  });

  it("sets isBottom to true if intersection", () => {
    const element = { parentElement: {} } as Element;
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback });
    const { result } = renderHook(() => useScrollToBottom());

    const [setBottomRef] = result.current;
    act(() => setBottomRef(element));

    const [, isBottom] = result.current;
    expect(isBottom).toBe(true);
  });

  it("calls disconnect if node changes", () => {
    const disconnect = jest.fn();
    const element = { parentElement: {} } as Element;
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback, disconnect });
    const { result } = renderHook(() => useScrollToBottom());

    let [setBottomRef] = result.current;
    act(() => setBottomRef(element));

    [setBottomRef] = result.current;
    expect(disconnect).not.toHaveBeenCalled();

    act(() => setBottomRef(null));

    expect(disconnect).toHaveBeenCalled();
  });

  it("calls observe if node changes", () => {
    const observe = jest.fn();
    const element = { parentElement: {} } as Element;
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback, observe });
    const { result } = renderHook(() => useScrollToBottom());

    let [setBottomRef] = result.current;
    act(() => setBottomRef(element));

    expect(observe).toHaveBeenCalled();

    [setBottomRef] = result.current;
    const newElement = { ...element };
    act(() => setBottomRef(newElement));

    expect(observe).toHaveBeenCalledTimes(2);
  });

  it("doesn't call observe if node changes but is not valid", () => {
    const observe = jest.fn();
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback, observe });
    const { result } = renderHook(() => useScrollToBottom());

    let [setBottomRef] = result.current;
    act(() => setBottomRef(null));

    expect(observe).not.toHaveBeenCalled();

    [setBottomRef] = result.current;
    act(() => setBottomRef({} as Element));

    expect(observe).not.toHaveBeenCalled();
  });

  it("sets isBottom true if node is valid", () => {
    const element = { parentElement: {} } as Element;
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback });
    const { result } = renderHook(() => useScrollToBottom());

    let [setBottomRef, isBottom] = result.current;
    expect(isBottom).toBe(false);
    act(() => setBottomRef(element));

    [setBottomRef, isBottom] = result.current;
    expect(isBottom).toBe(true);
  });

  it("sets isBottom false if node is invalid", () => {
    const entry = { isIntersecting: true };
    const setCallback = (callback: Function) => callback([entry]);
    setupIntersectionObserverMock({ setCallback });
    const { result } = renderHook(() => useScrollToBottom());

    let [setBottomRef, isBottom] = result.current;

    expect(isBottom).toBe(false);
    // null element
    act(() => setBottomRef(null));

    [setBottomRef, isBottom] = result.current;
    expect(isBottom).toBe(false);
    // invalid element
    act(() => setBottomRef({} as Element));

    [, isBottom] = result.current;
    expect(isBottom).toBe(false);
  });
});
