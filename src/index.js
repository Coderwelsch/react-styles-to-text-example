import React from "react";
import ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

import StylesToText from "styles-to-text";

import "./index.css";

const styleDefinitions = [
  {
    offset: 0,
    length: 20,
    style: "BOLD"
  },
  {
    offset: 3,
    length: 17,
    style: "STRIKE"
  },
  {
    offset: 14,
    length: 15,
    style: "UNDERLINE"
  }
];

const textToStyle = "To be, or not to be, that is the question.";
const styledHtmlText = StylesToText(textToStyle, styleDefinitions);

ReactDOM.render(
  <React.StrictMode>
    <section>
      <h1>Styles to Text Example</h1>
      <p dangerouslySetInnerHTML={{ __html: styledHtmlText }} />

      <hr />

      <p>
        The html output: <br />
        <SyntaxHighlighter language={"html"} style={codeStyle}>
          {styledHtmlText}
        </SyntaxHighlighter>
      </p>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);
