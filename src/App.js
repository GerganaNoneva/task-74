import React, { useState, useMemo } from 'react';

function App({ value, onChange }) {
  const [text, setText] = useState(value);

  const isValid = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text} onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
        <i className={`fas ${isValid ? "fa-check" : "fa-times"}`} />
        </span> 
      </div>
    </div>
  );
}


export default App;

/*
<i className="fas fa-times" />
import React, { useState, useMemo } from "react";

function TextField({ value, onChange }) {
  const [text, setText] = useState(value);

  const isValid = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <i className={`fas ${isValid ? "fa-check" : "fa-times"}`} />
    </div>
  );
}

export default TextField;

*/

/*
function App() {
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."

        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span> 
      </div>
    </div>
  );
}*/
