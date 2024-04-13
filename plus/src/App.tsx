import { useState } from 'react'
import './App.css'
import Problem from './components/problem'

function App() {
  const [a, setA] = useState(4)
  const [b, setB] = useState(5)

  function correct() {
    setA(Math.floor(Math.random() * 100) + 1)
    setB(Math.floor(Math.random() * 100) + 1)
  }

  return <Problem a={a} b={b} onAnswerCorrect={correct} />
}

export default App
