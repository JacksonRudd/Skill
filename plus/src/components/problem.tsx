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
  const [animationKey, setAnimationKey] = useState(0)
  const mapLettersToNumbers = (letter: string): string => {
    switch (letter) {
      case ';':
        return '0'
      case 'm':
        return '1'
      case ',':
        return '2'
      case '.':
        return '3'
      case 'j':
        return '4'
      case 'k':
        return '5'
      case 'l':
        return '6'
      case 'u':
        return '7'
      case 'i':
        return '8'
      case 'o':
        return '9'

      default:
        return letter
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    const lastChar = inputValue[inputValue.length - 1]
    if (lastChar == 'h') {
      inputValue = inputValue.slice(0, -2)
    }
    const mappedValue = inputValue
      .split('')
      .map((letter) => mapLettersToNumbers(letter))
      .join('')
    setInputValue(mappedValue)
    if (mappedValue === String(a + b)) {
      const problemElement = document.querySelector('.problem')
      if (problemElement) {
        problemElement.classList.add('fade-out')
      }
      setTimeout(() => {
        onAnswerCorrect()
        setAnimationKey(animationKey + 1)
        setInputValue('')
      }, 200)
    }
  }

  return (
    <div key={animationKey} className="problem">
      <p className="problem-title">
        {a} + {b}
      </p>
      <input
        className="problem-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      />
    </div>
  )
}

export default Problem
