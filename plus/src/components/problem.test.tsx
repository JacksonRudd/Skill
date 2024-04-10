import { render, screen, fireEvent } from '@testing-library/react'
import Problem from './components/problem'

test('renders the problem correctly', () => {
  render(<Problem a={2} b={3} />)
  const problemText = screen.getByText('2 + 3')
  expect(problemText).toBeInTheDocument()
})

test('handles click event correctly', () => {
  render(<Problem a={2} b={3} />)
  const answerInput = screen.getByRole('textbox')
  const answerButton = screen.getByRole('button', { name: 'Answer' })

  fireEvent.change(answerInput, { target: { value: '5' } })
  fireEvent.click(answerButton)

  const alertMessage = screen.getByText('The answer is 5 = 5')
  expect(alertMessage).toBeInTheDocument()
})
