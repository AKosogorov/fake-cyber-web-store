import type { IProduct, IProductResponse } from '@/entities/Product'

export function mapProduct(item: IProductResponse): IProduct {
  return {
    ...item,
    images: item.images.map(src => ({
      src,
      alt: item.title
    }))
  }
}
