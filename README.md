# use-scroll-to-bottom

> React Hook which tells you when you&#x27;ve scrolled to bottom

Uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) so make sure you can support it.

[![NPM](https://badgen.net/npm/v/use-scroll-to-bottom)](https://www.npmjs.com/package/use-scroll-to-bottom) [![checks](https://badgen.net/github/checks/tudorgergely/use-scroll-to-bottom)](https://github.com/tudorgergely/use-scroll-to-bottom/actions?workflow=CI) [![size](https://badgen.net/bundlephobia/minzip/use-scroll-to-bottom)](https://bundlephobia.com/result?p=use-scroll-to-bottom) [![coverage](https://coveralls.io/repos/github/tudorgergely/use-scroll-to-bottom/badge.svg?branch=master)](https://coveralls.io/github/tudorgergely/use-scroll-to-bottom?branch=master)
## Install

```bash
npm install --save use-scroll-to-bottom
```

## Usage

The hook returns a tuple of two things:
1. A RefCallback which needs to go on the last element of your scrolling container.
2. A boolean value which tells you whether bottom has been reached or not.

Check [demo](https://tudorgergely.github.io/use-scroll-to-bottom/) and [examples](https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example)

```tsx
import React from 'react';
import {useScrollToBottom} from 'use-scroll-to-bottom'

export default function MyComponent() {
  // isBottom will be true when bottom is reached
  // add setBottomRef to the last element in your scrolling container
  const [setBottomRef, isBottom] = useScrollToBottom();

  return (
    <div className="simple-container">
      <div className="big-element">
        {isBottom && "Bottom reached"}
      </div>
      <div ref={setBottomRef}>Bottom</div>
    </div>
  )
}

```

## License

MIT © [tudorgergely](https://github.com/tudorgergely)
