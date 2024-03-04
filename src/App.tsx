import React from 'react';
import './App.css';
import Formula from './components/Formula';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MathJaxContext>
        <h1>eformel.dk</h1>
          <p>
            <MathJax> {"\\((\\frac{10}{4x} \\approx 2^{12})\\)"} </MathJax>
          </p>
        </MathJaxContext>
      </header>
    </div>
  );
}

export default App;
