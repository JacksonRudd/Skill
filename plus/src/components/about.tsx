function About() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Welcome to Zen Of Calculation!</h1>
      <p>
        Zen Of Calculation is a minimalistic game designed to transform
        mastering mental arithmatic into a soothing and enjoyable experience.
      </p>

      <h2>How to Input Answers</h2>
      <p>
        Answers can be input using either a standard numpad or via special key
        mappings for enhanced ease of use:
      </p>
      <ul>
        <li>'m' corresponds to 1</li>
        <li>',' (comma) corresponds to 2</li>
        <li>'.' (period) corresponds to 3</li>
        <li>'j' corresponds to 4</li>
        <li>'k' corresponds to 5</li>
        <li>'l' corresponds to 6</li>
        <li>'u' corresponds to 7</li>
        <li>'i' corresponds to 8</li>
        <li>'o' corresponds to 9</li>
        <li>'h' serves as a backspace for correcting entries</li>
        <li>':' (colon) represents the number '0'</li>
      </ul>

      <h2>Scoring System</h2>
      <p>
        Swift responses within two seconds enhance your score, while more
        time-consuming efforts will gently reduce it. The numbers presented for
        addition are always less than your current score, so the difficulty
        naturally increases as you progress. Fear not, as you will never lose
        more than two points in a round, allowing for a stress-free experience
        even if you need to step away from the computer.
      </p>
    </div>
  )
}

export default About
