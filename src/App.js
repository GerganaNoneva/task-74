import React, { useState, useMemo } from "react";

function App({ value, onChange }) {
  const [text, setText] = useState(value);

  const isValid = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <i className={`fa ${isValid ? "fa-check" : "fa-times"}`} />
    </div>
  );
}

export default App;

