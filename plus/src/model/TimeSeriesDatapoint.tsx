export interface TimeSeriesDatapoint {
  getValue: () => number
  getTime: () => Date
}
