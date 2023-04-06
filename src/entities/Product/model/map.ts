import type { IProduct, IProductGetResponse, IProductResponse } from './types'

export function mapProductResponse(item: IProductResponse): IProduct {
  return {
    ...item,
    images: item.images.map(src => ({
      src,
      alt: item.title
    }))
  }
}

export function getMapped(data: IProductGetResponse) {
  return data.products.map(mapProductResponse)
}
