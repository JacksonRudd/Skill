import { useState } from 'react'
import './App.css'
import Game from './components/game'
import History from './components/history'
import About from './components/about'
import { ProblemType } from './components/problem'
function App() {
  const [page, setPage] = useState<'history' | 'about' | 'game'>('history')

  const handlePageChange = (newPage: 'history' | 'about' | 'game') => {
    setPage(newPage)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => handlePageChange('history')}>
              History
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handlePageChange('game')}>
              Play
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handlePageChange('about')}>
              About
            </a>
          </li>
        </ul>
      </nav>
      {page === 'history' && <History />}
      {page === 'game' && (
        <Game
          gameId={new Date().toLocaleString()}
          allowed_operations={[ProblemType.Plus, ProblemType.Minus]}
        />
      )}
      {page === 'about' && <About />}
    </>
  )
}

export default App
