import { useState } from 'react'
import Problem from './problem'

function Game() {
  const targetTime = 2
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [score, setScore] = useState(1)
  const [max, setMax] = useState(1)
  const [lastCalledTime, setLastCalledTime] = useState(Date.now())
  const [solvedProblems, setSolvedProblems] = useState<[number, number][]>([])

  function correct() {
    const currentTime = Date.now()
    const timeSinceLastCall = Math.floor((currentTime - lastCalledTime) / 1000)
    setLastCalledTime(currentTime)
    setScore(Math.max(score + Math.max(targetTime - timeSinceLastCall, -2), 0))
    setMax(Math.max(score, max))
    function dice_with_n_sides(n: number) {
      return Math.floor(Math.random() * n) + 1
    }
    const newA = dice_with_n_sides(score)
    const newB = dice_with_n_sides(score)
    setA(newA)
    setB(newB)
    setSolvedProblems([...solvedProblems, [newA, newB]])
  }

  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: 'green',
            height: '20px',
            width: `${score}%`,
          }}
        ></div>
        <div>Score: {score}</div>
        <div>Max Score: {max}</div>
        <div>Total Problems Solved: {solvedProblems.length}</div>
      </div>
      <Problem a={a} b={b} onAnswerCorrect={correct} />
    </>
  )
}

export default Game
