export function mockRequest(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) resolve()

      reject(new Error('Не удалось получить ответ от сервера'))
    }, 1000)
  })
}
