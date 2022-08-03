import React, { useState } from 'react';
import data from './data';
function App() {
  const [display, setDisplay] = useState([]);
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    input < 0
      ? setDisplay(data.slice(0, 1))
      : input > 8
      ? setDisplay(data.slice(0, 8))
      : setDisplay(data.slice(0, input));
    setInput('');
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='number'>Paragraphs: </label>
        <input
          value={input}
          type='number'
          name='number'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>

      {display.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </section>
  );
}

export default App;
