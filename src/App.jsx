import { useState } from 'react'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import { answers } from './answers'
import './App.css'

function App() {

  const [id, setId] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('Check your answer!');
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const order = Array.from({length: answers.length}, (_, i) => i);

  const handleClick = (e) => {
    if (e.target.textContent === "Prev") {
      setId(id === 0 ? answers.length - 1 : id - 1);
    } else if (e.target.textContent === "Next") {
      setId(id === answers.length - 1 ? 0 : id + 1);
    } else if (e.target.textContent === "Shuffle") {
      shuffle();
    }
  }
  
  const shuffle = () => {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    setId(Math.floor(Math.random() * answers.length));
  }
  
  const checkAnswer = () => {
    if (input.toLowerCase() === answers[id].answer.toLowerCase()) {
      setMaxStreak(Math.max(maxStreak, streak + 1));
      setResult('Correct!');
      setStreak(streak + 1);
      
    } else {
      setResult('Incorrect!');
      setStreak(0);
    }
  }

  return (
    <>
      <Header />
      <h3>Number of Card: {answers.length}</h3>
      <Flashcard key={id} subject={answers[id].subject} question={answers[id].question} answer={answers[id].answer} />
      <div className='checker'>
        <p>Guess the answer here:</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <p>{result}</p>
        <p>Curent Streak: {streak}, Max Streak: {maxStreak}</p>
      </div>
      <button onClick={checkAnswer}>Check</button>
      <div className='actions'>
        <button onClick={handleClick}>Prev</button>
        <button onClick={handleClick}>Next</button>
        <button onClick={handleClick}>Shuffle</button>
      </div>
    </>
  )
}

export default App
