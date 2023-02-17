import type { IImage } from '@/shared/lib/interface/image'

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
