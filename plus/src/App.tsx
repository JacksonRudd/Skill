import { useState } from 'react'
import './App.css'
import Problem from './components/problem'

function App() {
  const targetTime = 2
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [max, setMax] = useState(1)
  const [lastCalledTime, setLastCalledTime] = useState(Date.now())
  function correct() {
    const currentTime = Date.now()
    const timeSinceLastCall = Math.floor((currentTime - lastCalledTime) / 1000)
    setLastCalledTime(currentTime)
    setMax(Math.max(max + Math.max(targetTime - timeSinceLastCall, -2), 0))
    function dice_with_n_sides(n: number) {
      return Math.floor(Math.random() * n) + 1
    }
    setA(dice_with_n_sides(max))
    setB(dice_with_n_sides(max))
  }

  return (
    <>
      <>{max}</>
      <Problem a={a} b={b} onAnswerCorrect={correct} />
    </>
  )
}

export default App
