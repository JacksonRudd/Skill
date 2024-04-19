import { useState } from 'react'
import './problem.css'
import Input from './input'
enum ProblemType {
  Plus = 'plus',
  Minus = 'minus',
}

function is_correct(
  problemType: ProblemType,
  a: number,
  b: number,
  answer: string,
) {
  if (problemType === ProblemType.Plus) {
    return a + b === Number(answer)
  } else if (problemType === ProblemType.Minus) {
    return a - b === Number(answer)
  } else {
    return false
  }
}

function Problem({
  a,
  b,
  type,
  onAnswerCorrect,
}: {
  a: number
  b: number
  type: ProblemType
  onAnswerCorrect: () => void
}) {
  const [animationKey, setAnimationKey] = useState(0)

  const handleInputChange = (input: string) => {
    console.log(input)
    if (is_correct(type, a, b, input)) {
      const problemElement = document.querySelector('.problem')
      if (problemElement) {
        problemElement.classList.add('fade-out')
      }
      setTimeout(() => {
        onAnswerCorrect()
        setAnimationKey(animationKey + 1)
      }, 200)
    }
  }

  return (
    <div key={animationKey} className={`problem ${type}`}>
      <p className="problem-title">
        {a} {type === ProblemType.Plus ? '+' : '-'} {b}
      </p>
      <Input postInput={handleInputChange} />
    </div>
  )
}

export { Problem, ProblemType }
