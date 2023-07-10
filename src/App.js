import { useState } from "react";
import "./App.css";
import Slate from "./components/Slate";

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <>
      <div className="pannel slate">
        <Slate 
        language='html'
        value={html}
        displayName='HTML'
        onChange={setHtml}
        />
        <Slate 
        language='css'
        value={css}
        displayName='CSS'
        onChange={setCss}
        />
        <Slate
        language='javascript'
        value={js}
        displayName='JS'
        onChange={setJs}
        />
      </div>
      <div className="pannel">
        <iframe
          frameborder="0"
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
