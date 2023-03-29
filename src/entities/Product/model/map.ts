import type {
  IProduct,
  IProductAllResponse,
  IProductResponse
} from './interface'

export function mapProductResponse(item: IProductResponse): IProduct {
  return {
    ...item,
    images: item.images.map(src => ({
      src,
      alt: item.title
    }))
  }
}

export function getMapped(data: IProductAllResponse) {
  return data.products.map(mapProductResponse)
}
