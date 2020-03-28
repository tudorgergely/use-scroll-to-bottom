# use-scroll-to-bottom

> React Hook which tells you when you&#x27;ve scrolled to bottom

[![NPM](https://img.shields.io/npm/v/use-scroll-to-bottom.svg)](https://www.npmjs.com/package/use-scroll-to-bottom) 
## Install

```bash
npm install --save use-scroll-to-bottom
```

## Usage

Check [demo](https://tudorgergely.github.io/use-scroll-to-bottom/) and [examples](https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example)

```tsx
import React from 'react';
import {useScrollToBottom} from 'use-scroll-to-bottom'

export default function MyComponent() {
  // isBottom will be true when bottom is reached
  // add ref to an element right below your scrollable one
  const [ref, isBottom] = useScrollToBottom();

  return (
    <div className="simple-container">
      <div className="big-element">
        {isBottom && "Bottom reached"}
      </div>
      <div ref={ref}>Bottom</div>
    </div>
  )
}

```

## License

MIT © [tudorgergely](https://github.com/tudorgergely)
