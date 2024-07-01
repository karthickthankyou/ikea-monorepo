import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/graphql'
import { Product } from '../entities/product.entity'

@InputType()
export class CreateProductInput extends IntersectionType(
  PickType(Product, [
    'name',
    'price',
    'category',
    'subCategory',
    'tags',
    'sellerId',
    'images',
  ]),
  PartialType(
    PickType(Product, [
      'url',
      'outOfStock',
      'reviews',
      'rating',
      'discount',
      'oldPrice',
      'measurements',
      'description',
    ]),
  ),
  InputType,
) {}
