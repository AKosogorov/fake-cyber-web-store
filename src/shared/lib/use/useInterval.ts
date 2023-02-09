export default function useInterval(handler: Function, timeout: number) {
  let intervalId: number

  function startInterval() {
    intervalId = setInterval(handler, timeout)
  }

  function finishInterval() {
    clearInterval(intervalId)
  }

  return {
    startInterval,
    finishInterval
  }
}
