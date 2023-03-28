import type { IProduct, IProductResponse } from './interface'

export function mapProductResponse(item: IProductResponse): IProduct {
  return {
    ...item,
    images: item.images.map(src => ({
      src,
      alt: item.title
    }))
  }
}

export function getMapped(products: IProductResponse[]) {
  return products.map(mapProductResponse)
}
