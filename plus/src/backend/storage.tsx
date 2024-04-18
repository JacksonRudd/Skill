import Score from '../model/score'

const saveScore = (score: Score): void => {
  // starting with an inefficient implementation to see if it's a problem
  const scores = loadScores().filter((x: Score) => x.game_id !== score.game_id)
  scores.push(score)
  localStorage.setItem('scores', JSON.stringify(scores))
}

const loadScores = (): Score[] => {
  return (JSON.parse(localStorage.getItem('scores') ?? '[]') || []).map(
    (x: any) => Score.fromJson(x),
  )
}

export { loadScores, saveScore }
