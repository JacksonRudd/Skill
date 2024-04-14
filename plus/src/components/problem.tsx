import { useState } from 'react'
import './problem.css'
import Input from './input'
function Problem({
  a,
  b,
  onAnswerCorrect,
}: {
  a: number
  b: number
  onAnswerCorrect: () => void
}) {
  const [animationKey, setAnimationKey] = useState(0)

  const handleInputChange = (input: string) => {
    console.log(input)
    if (input === String(a + b)) {
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
    <div key={animationKey} className="problem">
      <p className="problem-title">
        {a} + {b}
      </p>
      <Input postInput={handleInputChange} />
    </div>
  )
}

export default Problem
