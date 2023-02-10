export function generateNumber(min: number = 1, max: number = 99): number {
  return Math.round(Math.random() * (max - min) + min)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15)
}
