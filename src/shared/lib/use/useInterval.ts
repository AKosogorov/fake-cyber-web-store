interface IUseInterval {
  startInterval: () => void
  finishInterval: () => void
}

export default function useInterval(
  handler: Function,
  timeout: number
): IUseInterval {
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
