interface IUseTimeout {
  setTimeoutId: Function
  clearTimeoutId: Function
}

export default function useTimeout(
  handler: Function,
  timeout: number
): IUseTimeout {
  let timeoutId: number

  function setTimeoutId() {
    timeoutId = setTimeout(handler, timeout)
  }

  function clearTimeoutId() {
    clearTimeout(timeoutId)
  }

  return {
    setTimeoutId,
    clearTimeoutId
  }
}
