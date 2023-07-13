import { useEffect, useState } from "react";
import "./App.css";
import Slate from "./components/Slate";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setSrcDoc(
        `
        <html>

        <body><font face = "Times New Roman"/>${html}</ body>
        <style>${css}</style>
        <script>${js}</script>
        </ html>
        `
      );
    }, 250);
    return () => clearTimeout(delay);
  }, [html, css, js]);
  
  return (
    <>
      <div className="pannel slate">
        <Slate
          language="xml"
          value={html}
          displayName="HTML"
          onChange={setHtml}
        />
        <Slate language="css" value={css} displayName="CSS" onChange={setCss} />
        <Slate
          language="javascript"
          value={js}
          displayName="JS"
          onChange={setJs}
        />
      </div>
      <div className="pannel">
        <iframe
          srcDoc={srcDoc}
          className="output"
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
