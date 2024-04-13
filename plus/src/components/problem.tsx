import { useState } from 'react'
import './problem.css'
function Problem({
  a,
  b,
  onAnswerCorrect,
}: {
  a: number
  b: number
  onAnswerCorrect: () => void
}) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (e.target.value === String(a + b)) {
      onAnswerCorrect()
      setInputValue('')
    }
  }

  return (
    <div className="problem">
      <p className="problem-title">
        {a} + {b}
      </p>
      <input
        className="problem-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default Problem
