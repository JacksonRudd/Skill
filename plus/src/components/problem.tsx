import { useState } from 'react'

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
    <div>
      <h1>
        {a} + {b}
      </h1>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default Problem
