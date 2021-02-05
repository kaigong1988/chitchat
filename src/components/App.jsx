import React, { useState } from 'react';
import Login from './Login.jsx';

function App() {
  const [id, setId] = useState();
  return (
    <div>
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
