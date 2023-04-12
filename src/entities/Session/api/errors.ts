import type { IStringIdx } from '@/shared/lib/types/object'

const FB_ACCOUNTS_API_ERRORS: IStringIdx<string> = {
  EMAIL_NOT_FOUND: 'User with this email was not found',
  INVALID_PASSWORD: 'Wrong password',
  INVALID_EMAIL: 'Invalid email entered',
  EMAIL_EXISTS: 'This email is already in use'
} as const

export function getErrorMessageBy(code: string) {
  return FB_ACCOUNTS_API_ERRORS[code] || 'Unknown error'
}
