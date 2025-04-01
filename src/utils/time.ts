export function getTimePeriod() {
  const hour = new Date().getHours()

  if (hour >= 6 && hour < 12) {
    return '早上'
  } else if (hour >= 12 && hour < 14) {
    return '中午'
  } else if (hour >= 14 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}
