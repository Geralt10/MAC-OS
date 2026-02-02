/** @format */

import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "../windows/MacWindow";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";

const Note = ({windowName,setWindow}) => {
  const [markdown, setMarkDown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkDown(text));
  }, []);
  return (
    <MacWindow  windowName={windowName} setWindow={setWindow}>
      <div className='note-window'>
        {markdown ? (
          <SyntaxHighlighter language='javascript' style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
