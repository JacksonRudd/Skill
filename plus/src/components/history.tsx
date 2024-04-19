import ProgressGraph from './progress_graph'

function History() {
  return (
    <div
      style={{
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ProgressGraph></ProgressGraph>
    </div>
  )
}

export default History
