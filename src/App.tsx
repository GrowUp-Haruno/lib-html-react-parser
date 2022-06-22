import "./styles.css";

import parse, {
  Comment,
  Element,
  Node,
  ProcessingInstruction,
  Text
} from "html-react-parser";
// ↑ ↓ You can confirm that the error disappears when you toggle the upper and lower comment-outs.
// import parse,{Element} from 'html-react-parser';
// import { Comment, Node, ProcessingInstruction, Text } from 'domhandler';

export default function App() {
  parse(`<p>string</p>`, {
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
    }
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
