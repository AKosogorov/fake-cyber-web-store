export function throttle(func: Function, ms: number) {
  let isThrottled = false
  let savedArgs: any
  let savedThis: any

  function throttleWrapper(this: any) {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false

      if (savedArgs) {
        throttleWrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return throttleWrapper
}
