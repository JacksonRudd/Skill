import { useState } from 'react'
import './problem.css'
function Input({ postInput }: { postInput: (userInput: string) => void }) {
  const [inputValue, setInputValue] = useState('')
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
        if (/^\d$/.test(letter)) {
          return letter
        } else {
          return ''
        }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    const lastChar = inputValue[inputValue.length - 1]
    if (lastChar == 'h') {
      if (inputValue.length < 1) {
        return
      }
      inputValue = inputValue.slice(0, -2)
    }
    const mappedValue = inputValue
      .split('')
      .map((letter) => mapLettersToNumbers(letter))
      .join('')
    setInputValue(mappedValue)
    postInput(mappedValue)
  }

  return (
    <input
      className="problem-input"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      autoFocus
    />
  )
}

export default Input
