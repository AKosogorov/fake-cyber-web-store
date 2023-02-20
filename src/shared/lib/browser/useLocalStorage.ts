const PREFIX = 'FAKE_CYBER_WEB_STORE'

interface IUseLocalStorage<T> {
  value: T
  setValue: (value: T) => void
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): IUseLocalStorage<T> {
  const keyLS = `${PREFIX}:${key}`

  const valueLS = window.localStorage.getItem(keyLS)
  const value: T = valueLS ? JSON.parse(valueLS) : initialValue

  function setValue(value: T): void {
    window.localStorage.setItem(keyLS, JSON.stringify(value))
  }

  return { value, setValue }
}
