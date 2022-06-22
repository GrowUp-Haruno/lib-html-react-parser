An error occurred in the browser when executing the following code.
This does not occur in VSCode.
```typescript
// /src/App.tsx
import parth, { Comment, Element, Node, ProcessingInstruction, Text } from 'html-react-parser';

function App() {
  parth(`<p>string</p>`, {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        console.log(domNode);
      } else if (domNode instanceof Comment) {
        console.log(domNode);
      } else if (domNode instanceof ProcessingInstruction) {
        console.log(domNode);
      } else if (domNode instanceof Text) {
        console.log(domNode.data);
      } else if (domNode instanceof Node) {
        console.log(domNode);
      }
    },
  });

  return (....);
}
```


The following is the error message.
```
Compiled with problems:X
ERROR in ./src/App.tsx 17:36-43
export 'Comment' (imported as 'Comment') was not found in 'html-react-parser' (possible exports: Element, attributesToProps, default, domToReact, htmlToDOM)
ERROR in ./src/App.tsx 19:36-57
export 'ProcessingInstruction' (imported as 'ProcessingInstruction') was not found in 'html-react-parser' (possible exports: Element, attributesToProps, default, domToReact, htmlToDOM)
ERROR in ./src/App.tsx 21:36-40
export 'Text' (imported as 'Text') was not found in 'html-react-parser' (possible exports: Element, attributesToProps, default, domToReact, htmlToDOM)
ERROR in ./src/App.tsx 23:36-40
export 'Node' (imported as 'Node') was not found in 'html-react-parser' (possible exports: Element, attributesToProps, default, domToReact, htmlToDOM)
```
It seems that an error is occurring for all elements except for "Element".

When I call the "domhandler" directly, which imports and exports in 'html-react-parser', it works fine.
```diff
- import parth, { Comment, Element, Node, ProcessingInstruction, Text } from 'html-react-parser';
+ import parth from 'html-react-parser';
+ import { Comment, Element, Node, ProcessingInstruction, Text } from 'domhandler';
```

The reproduction environment is:
```
yarn create react-app my-app --template typescript
cd ./my-app
yarn add html-react-parser
```