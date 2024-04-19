import ProgressGraph from './progress_graph'
import { loadScores } from '../backend/storage'

function History() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '80%' }}>
        <ProgressGraph
          series={loadScores()}
          title={'Score History'}
        ></ProgressGraph>
      </div>
    </div>
  )
}

export default History
