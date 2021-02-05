import React, { useRef } from 'react';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>
          Enter your ID:
          <input
            style={{ width: '300px', height: '30px' }}
            type="text"
            placeholder="insert your name please"
            ref={idRef}
          />
        </lable>
        <input style={{ width: '80px', height: '35px' }} type="submit" />
      </form>
    </div>
  );
}
