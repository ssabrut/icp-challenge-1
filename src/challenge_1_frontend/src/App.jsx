import { useState } from 'react';
import { challenge_1_backend } from 'declarations/challenge_1_backend';

function App() {
  const [result, setResult] = useState("");

  function handleSum(e) {
    e.preventDefault();
    const a = parseInt(e.target.elements.a.value);
    const b = parseInt(e.target.elements.b.value);
    challenge_1_backend.sum(a, b).then((_result) => {
      console.log(_result)
      setResult(_result.toString());
    });
  }

  function handleOperation(e) {
    e.preventDefault();
    const operation = e.target.elements.operation.value;
    const a = parseInt(e.target.elements.a.value);
    const b = parseInt(e.target.elements.b.value);

    let promise;
    switch (operation) {
      case 'sum':
        promise = challenge_1_backend.sum(a, b);
        break;
      case 'multiply':
        promise = challenge_1_backend.multiply(a, b);
        break;
      case 'divide':
        promise = challenge_1_backend.divide(a, b);
        break;
      case 'subtract':
        promise = challenge_1_backend.subtract(a, b);
        break;
      default:
        console.error('Invalid operation');
        return;
    }

    promise.then((_result) => {
      console.log(_result);
      setResult(_result.toString());
    });
  }

  return (
    <main>
      <form action="#" onSubmit={handleOperation}>
        <label htmlFor="operation">Operation</label>
        <select id="operation" name="operation">
          <option value="sum">Sum</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
          <option value="subtract">Subtract</option>
        </select>
        <label htmlFor="a">Number 1</label>
        <input type="number" id="a" name="a" />
        <label htmlFor="b">Number 2</label>
        <input type="number" id="b" name="b" />
        <button type="submit">Calculate</button>
      </form>
      <section id="result">Result: {result}</section>
    </main>
  );

  //     <h1>Challenge 1: Simple Calculator</h1>
  //     <h2>Sum</h2>
  //     <form action="#" onSubmit={handleSum}>
  //       <label htmlFor="a">Number 1</label>
  //       <input type="number" id="a" name="a" />
  //       <label htmlFor="b">Number 1</label>
  //       <input type="number" id="b" name="b" />
  //       <button type="submit">Calculate</button>
  //     </form>

  //   </main>
  // );
}

export default App;
