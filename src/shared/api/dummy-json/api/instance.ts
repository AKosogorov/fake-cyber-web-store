import axios from 'axios'
import { DJ_API_URL } from '@/shared/config'

export const instance = axios.create({
  baseURL: DJ_API_URL
})
