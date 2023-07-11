import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Slate(props) {
  const { onChange, value, displayName, language } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
      <div className="editor">
        <div className="editor-header">
          {displayName}
          <button>O/C</button>
        </div>
        <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className="code-slate"
        options={{
          lineWrapping: true,
          lint: true,
          theme:"material",
          mode: language,
          lineNumbers: true,
        }}
      />
      </div>
  );
}
