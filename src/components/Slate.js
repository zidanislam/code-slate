import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Slate(props) {
  const { onChange, value, displayName, language } = props;

  const [expand, setExpand] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
      <div className={`editor ${expand ? " ":"close"}`}>
        <div className="editor-header">
          {displayName}
          <button 
          type="button"
          className="open-close-btn"
          onClick={()=>setExpand(preExpand => !preExpand)}><FontAwesomeIcon icon={expand ? faCompressAlt: faExpandAlt}/></button>
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
