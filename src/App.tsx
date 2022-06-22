import logo from './logo.svg';
import './App.css';

import  parth,{ Comment, Element, Node, ProcessingInstruction, Text } from 'html-react-parser';

// ↑ ↓ You can confirm that the error disappears when you toggle the upper and lower comment-outs.

// import parth, { Element } from 'html-react-parser';
// import { Comment, Node, ProcessingInstruction, Text } from 'domhandler';

function App() {
  parth(`<p>a</p>`, {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        console.log(domNode);
      } else if (domNode instanceof Comment) {
        console.log(domNode);
      } else if (domNode instanceof ProcessingInstruction) {
        console.log(domNode);
      } else if (domNode instanceof Text) {
        console.log(domNode);
      } else if (domNode instanceof Node) {
        console.log(domNode);
      }
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
