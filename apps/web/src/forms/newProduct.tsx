import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const newProductFormSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Product description is required'),
  measurements: z.string().nonempty('Product measurements is required'),
  tags: z.string(),
  price: z
    .number({
      required_error: 'Product price is required',
      invalid_type_error: 'It is not a valid numeric number.',
    })
    .min(0, 'Price can not be negative'),
  discount: z
    .number({ invalid_type_error: 'It is not a valid numeric number.' })
    .min(0, 'Discount can not be negative')
    .max(100, 'Discount can not be greater than 100')
    .optional(),

  category: z.string().nonempty('Pick a product category'),
  subCategory: z.string().nonempty("Pick the product's sub category"),
  outOfStock: z.boolean().optional(),
  images: z
    .array(z.string())
    .refine(
      (images) => images.length >= 1 && images.length <= 8,
      'select 1 to 8 images',
    ),
})

export type FormTypeNewProduct = z.infer<typeof newProductFormSchema>

export const categories = [
  'Furniture',
  'Kitchen & appliances',
  'Beds & mattresses',
  'Storage & organisation',
  'Working from home',
  'Textiles',
  'Decoration',
  'Bathroom products',
  'Outdoor products',
  'Lighting',
  'Carpets, mats & flooring',
  'Baby & children',
  'Pots & plants',
  'Kitchenware & tableware',
  'Home electronics',
  'Laundry & cleaning',
  'Home smart',
  'Vinter Collections',
  'Home improvement',
  'Food & beverages',
].sort()

export const useFormNewProduct = () =>
  useForm<FormTypeNewProduct>({
    resolver: zodResolver(newProductFormSchema),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      subCategory: '',
      price: undefined,
      discount: 0,
      images: undefined,
      outOfStock: false,
    },
  })
