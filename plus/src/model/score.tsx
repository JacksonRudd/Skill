import { TimeSeriesDatapoint } from './TimeSeriesDatapoint'

class Score implements TimeSeriesDatapoint {
  game_type: string
  time: Date
  score: number
  game_id: string
  constructor(game_type: string, time: Date, score: number, game_id: string) {
    this.game_type = game_type
    this.time = time
    this.score = score
    this.game_id = game_id
  }

  getValue() {
    return this.score
  }

  getTime() {
    return this.time
  }

  static fromJson(json: any): Score {
    return new Score(
      json.game_type,
      new Date(json.time),
      json.score,
      json.game_id,
    )
  }

  toJson(): any {
    return {
      game_type: this.game_type,
      time: this.time.toISOString(),
      score: this.score,
      game_id: this.game_id,
    }
  }
}

export default Score
