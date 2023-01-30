import React, { useState, useMemo } from 'react';

function App() {
  const [text, setText] = useState('');

  // Use memoization to determine if the input is a valid number
  const isValidNumber = useMemo(() => {
    const regEx = /^\d+$/;
    return regEx.test(text);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <i
        className={`fa ${isValidNumber ? 'fa-check' : 'fa-times'}`}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
}

export default App;

