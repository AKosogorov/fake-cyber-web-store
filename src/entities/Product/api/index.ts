import { createBaseReadApi } from '@/shared/api'
import type { IProductAllResponse, IProductResponse } from '../model'

const URL = 'products'

export const api = createBaseReadApi<IProductAllResponse, IProductResponse>(URL)
