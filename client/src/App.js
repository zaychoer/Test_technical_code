import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputNumber, setInputNumber] = React.useState('');

  function generateTriangle(e) {
    e.preventDefault();
    console.log(inputNumber);
    return axios.post('http://localhost:3001/api/generate-triangle', {
      number: inputNumber,
    });
  }

  function generateOddNumber(e) {
    e.preventDefault();
    return axios.post('http://localhost:3001/api/generate-triangle', {
      number: inputNumber,
    });
  }

  function generatePrimeNumber(e) {
    e.prventDefault();
    return axios.post('http://localhost:3001/api/generate-triangle', {
      number: inputNumber,
    });
  }

  return (
    <div className="App">
      <section style={{ margin: 10 }}>
        <form>
          <input
            type="number"
            value={inputNumber}
            placeholder="Input Angka"
            style={{ margin: 10 }}
            onChange={(e) => setInputNumber(e.target.value)}
          />
          <div style={{ display: 'flex' }}>
            <button type="button" onClick={generateTriangle}>
              Generate Segitiga
            </button>
            <button type="button" onClick={generateOddNumber}>
              Generate Bilangan Ganjil
            </button>
            <button type="button" onClick={generatePrimeNumber}>
              Generate Bilangan Prima
            </button>
          </div>
        </form>
      </section>
      <section style={{ textAlign: 'left' }}>
        <h1>Result :</h1>
      </section>
    </div>
  );
}

export default App;
