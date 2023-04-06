import type { IImage } from '@/shared/lib/types/dom'
import type { IBaseGetResponse } from '@/shared/api'

export interface IProductResponse {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface IProductGetResponse extends IBaseGetResponse {
  products: IProductResponse[]
}

export type TProductCategory = string
export type TProductCategoriesResponse = TProductCategory[]

export interface IProduct {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: IImage[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}
