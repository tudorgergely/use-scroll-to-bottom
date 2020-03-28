import * as React from 'react'

export const useScrollToBottom = (): [React.RefObject<any>, boolean] => {
  const ref = React.useRef<any>(null);
  const [isBottom, setIsBottom] = React.useState(false);

  React.useEffect(() => {
    let observer: IntersectionObserver;

    if (ref.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      }, {root: ref.current.parentElement});
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [ref]);

  return [ref, isBottom];
};
