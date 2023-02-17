interface IUseTimeout {
  setTimeoutId: () => void
  clearTimeoutId: () => void
}

export default function useTimeout(
  handler: Function,
  timeout: number
): IUseTimeout {
  let timeoutId: number

  function setTimeoutId(): void {
    timeoutId = setTimeout(handler, timeout)
  }

  function clearTimeoutId(): void {
    clearTimeout(timeoutId)
  }

  return {
    setTimeoutId,
    clearTimeoutId
  }
}
