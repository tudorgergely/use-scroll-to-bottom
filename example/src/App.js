import React from 'react'

import DogsExample from "./examples/DogsExample";
import SimpleExample from "./examples/SimpleExample";

export default function App() {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li><a href="https://github.com/tudorgergely/use-scroll-to-bottom" target="_blank" rel="noopener noreferrer">github</a></li>
            <li><a href="#instructions">install</a></li>
            <li><a href="#examples">examples</a></li>
          </ul>
        </nav>
      </header>
      <section id="instructions">
        <header><h1>install</h1></header>
        <article>
          <pre>
            <code>{`
$ npm install use-scroll-to-bottom
            `}</code>
          </pre>
        </article>
      </section>
      <section id="examples">
        <header><h1>examples</h1></header>
        <article>
          <header>
            <h2>
              <a href="https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example/src/examples/SimpleExample.js">
                1. Changing element color when bottom is reached
              </a>
            </h2>
          </header>
          <SimpleExample/>
        </article>
        <article>
          <header>
            <h2>
              <a href="https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example/src/examples/DogsExample.js">
                2. Loading dogs images when bottom is reached
              </a>
            </h2>
          </header>
          <DogsExample/>
        </article>
      </section>
    </section>
  );
}
