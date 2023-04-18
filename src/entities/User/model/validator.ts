import { object, string } from 'yup'

export const validator = {
  username: () => string().required().min(3).max(50),
  gender: () => object().required()
} as const
