function About() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Welcome to Plus!</h1>
      <p>
        I tried to create a game that would make learning addition feel relaxing
        and pleasent.
      </p>

      <h2>How to Input Answers</h2>
      <p>
        You can input your answers using either a standard numpad or our special
        key mappings for added convenience:
      </p>
      <ul>
        <li>'m' maps to 1</li>
        <li>',' (comma) maps to 2</li>
        <li>'.' (period) maps to 3</li>
        <li>'j' maps to 4</li>
        <li>'k' maps to 5</li>
        <li>'l' maps to 6</li>
        <li>'u' maps to 7</li>
        <li>'i' maps to 8</li>
        <li>'o' maps to 9</li>
        <li>'h' functions as a backspace for correcting entries</li>
        <li>':' (colon) represents the number '0'</li>
      </ul>

      <h2>Scoring System</h2>
      <p>
        Solving a problem in less than two seconds will increase your score,
        while taking longer will decrease it. The nubers you are adding together
        are always less than your score, so as your score increases, the
        difficulty will as well. This means in the beggining of them game you
        will solve very simple problems. You'll never loose more than twopoints
        in a round, so don't stress about leaving your computer.
      </p>
    </div>
  )
}

export default About
