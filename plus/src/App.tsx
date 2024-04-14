import { useState } from 'react'
import './App.css'
import Problem from './components/problem'

function App() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [max, setMax] = useState(1)
  function correct() {
    setMax(max + 1)
    setA(Math.floor(Math.random() * max) + 1)
    setB(Math.floor(Math.random() * max) + 1)
  }

  return <Problem a={a} b={b} onAnswerCorrect={correct} />
}

export default App
