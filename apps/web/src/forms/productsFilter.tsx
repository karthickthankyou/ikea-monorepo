import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// export const rating = ['★', '★★', '★★★', '★★★★', '★★★★★'].sort()

enum SortTypes {
  'Best match',
  'Price: low to high',
  'Price: high to low',
  'Customer rating',
  'Newest',
  'Most popular',
  'Name',
}

export const sortTypesArray = [
  'Best match',
  'Price: low to high',
  'Price: high to low',
  'Customer rating',
  'Newest',
  'Most popular',
  'Name',
]

console.log('sortTypesArray ', sortTypesArray)

const productFilterSchema = z.object({
  search: z.string().default(''),
  price: z.tuple([z.number().min(0), z.number().min(0)]),
  rating: z.number().int().min(0).max(5).default(1),
  category: z.string().default(''),
  sort: z.nativeEnum(SortTypes),
})

export const filterDefaultValues = {
  search: '',
  price: [0, 20000] as [number, number],
  rating: 0,
  sort: SortTypes['Best match'],
  category: '',
}

export type FormTypeProductFilter = z.infer<typeof productFilterSchema>

export const useFormProductFilter = () =>
  useForm<FormTypeProductFilter>({
    resolver: zodResolver(productFilterSchema),
    defaultValues: filterDefaultValues,
  })
