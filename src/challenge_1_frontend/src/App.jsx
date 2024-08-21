import { useState } from 'react';
import { challenge_1_backend } from 'declarations/challenge_1_backend';

function App() {
  // const [greeting, setGreeting] = useState('');
  const [result, setResult] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   challenge_1_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  function handleSum(e) {
    e.preventDefault();
    const a = parseInt(e.target.elements.a.value);
    const b = parseInt(e.target.elements.b.value);
    challenge_1_backend.sum(a, b).then((_result) => {
      console.log(_result)
      setResult(_result.toString());
    });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />

      <h1>Challenge 1: Simple Calculator</h1>
      <form action="#" onSubmit={handleSum}>
        <label htmlFor="a">Number 1</label>
        <input type="number" id="a" name="a" />
        <label htmlFor="b">Number 1</label>
        <input type="number" id="b" name="b" />
        <button type="submit">Calculate</button>
      </form>
      <section id="result">Result: {result}</section>
    </main>
  );
}

export default App;
