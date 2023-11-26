export function throttle(func: Function, ms: number) {
  let isThrottled = false
  let savedArgs: any
  let savedThis: any

  function throttleWrapper(this: any) {
    if (isThrottled) {
      // eslint-disable-next-line prefer-rest-params
      savedArgs = arguments
      savedThis = this
      return
    }

    // eslint-disable-next-line prefer-rest-params
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
