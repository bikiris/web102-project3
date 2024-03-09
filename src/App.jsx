import { useState } from 'react'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import { answers } from './answers'
import './App.css'

function App() {

  const [id, setId] = useState(0);

  const handleClick = () => {
    setId(Math.floor(Math.random() * answers.length));
  }
  
  return (
    <>
      <Header />
      <h3>Number of Card: {answers.length}</h3>
      <Flashcard key={id} subject={answers[id].subject} question={answers[id].question} answer={answers[id].answer} />
      <button onClick={handleClick}>Next</button>
    </>
  )
}

export default App
