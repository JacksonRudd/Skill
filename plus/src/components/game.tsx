import { useState } from 'react'
import { Problem } from './problem'
import { ProblemType } from './problem'
import { saveScore } from '../backend/storage'
import Score from '../model/score'

function Game({
  gameId,
  allowed_operations,
}: {
  gameId: string
  allowed_operations: ProblemType[]
}) {
  const targetTime = 2
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [operation, setOp] = useState(ProblemType.Plus)
  const [score, setScore] = useState(1)
  const [max, setMax] = useState(1)
  const [lastCalledTime, setLastCalledTime] = useState(Date.now())
  const [solvedProblems, setSolvedProblems] = useState<
    [number, number, ProblemType][]
  >([])

  function correct() {
    // Record state changes
    const currentTime = Date.now()
    const timeSinceLastCall = Math.floor((currentTime - lastCalledTime) / 1000)
    setSolvedProblems([...solvedProblems, [a, b, operation]])
    setLastCalledTime(currentTime)
    setScore(Math.max(score + Math.max(targetTime - timeSinceLastCall, -2), 0))
    if (score > max) {
      setMax(score)
      saveScore(new Score('plus', new Date(), score, gameId))
    }
    function dice_with_n_sides(n: number) {
      return Math.floor(Math.random() * n) + 1
    }

    // choose a new problem
    const num1 = dice_with_n_sides(score)
    const num2 = dice_with_n_sides(score)
    const randomProblemType =
      allowed_operations[Math.floor(Math.random() * allowed_operations.length)]
    setOp(randomProblemType)
    if (randomProblemType == ProblemType.Minus) {
      setA(Math.max(num1, num2))
      setB(Math.min(num1, num2))
    } else {
      setA(num1)
      setB(num2)
    }
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
      <Problem a={a} b={b} onAnswerCorrect={correct} type={operation} />
    </>
  )
}

export default Game
