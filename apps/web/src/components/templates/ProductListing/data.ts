// import { Category } from '@ikea/generated/types'

import {
  InputMaybe,
  ProductOrderByWithRelationInput,
  SortOrder,
} from '@ikea/generated/types'

export type SortTypes =
  | 'Best match'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Newest'
  | 'Customer rating'
  | 'Most popular'
  | 'Name'

export const sortOptions: {
  [key in SortTypes]: ProductOrderByWithRelationInput
} = {
  'Best match': {},
  'Price: low to high': { price: SortOrder.Asc },
  'Price: high to low': { price: SortOrder.Desc },
  Newest: { createdAt: SortOrder.Asc },
  'Customer rating': { rating: SortOrder.Desc },
  'Most popular': { reviews: SortOrder.Desc },
  Name: { name: SortOrder.Asc },
}

// export const categories = Object.values(Category).sort()

export type PriceType =
  | '₹0 - 1,999'
  | '₹2,000 - 3,999'
  | '₹4,000 - 5,999'
  | '₹6,000 - 7,999'
  | '₹8,000+'

export const prices = [
  '₹0 - 1,999',
  '₹2,000 - 3,999',
  '₹4,000 - 5,999',
  '₹6,000 - 7,999',
  '₹8,000+',
].sort() as PriceType[]

export const filterDefaultValues = {
  search: '',
  price: [0, 20000] as [number, number],
  rating: 0,
  category: '',
  sort: 'Best match' as SortTypes,
}

export const filterKeys = Object.keys(filterDefaultValues)

export type SearchFilterType = typeof filterDefaultValues
export type SearchFilterKeys = keyof SearchFilterType
export type DirtyFilterType = {
  search?: boolean | undefined
  price?: boolean[] | undefined
  rating?: boolean | undefined
  categories?: boolean[] | undefined
  sort?: boolean | undefined
}
