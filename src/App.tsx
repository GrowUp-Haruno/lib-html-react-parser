import './App.css';

import parth, { Element } from 'html-react-parser';
import { jsxElementGenerator } from './lib/jsxElementGenerator';
import React from 'react';

const sampleHtml: string = `<p><strong>p</strong><br/>test</p>`;

function App() {
  const a = parth(sampleHtml, {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return null;
      if (!(domNode.parent === null)) return null;
      console.log(domNode.children)

      const resultElements: Array<JSX.Element> = [];

      resultElements.push(...jsxElementGenerator(domNode));

      return (
        <>
          {resultElements.map((result, index) => (
            <React.Fragment key={index}>{result}</React.Fragment>
          ))}
        </>
      );
    },
  });

  return <>{a}</>;
}

export default App;
