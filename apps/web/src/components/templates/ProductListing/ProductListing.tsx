/* eslint-disable react/jsx-props-no-spreading */
import { ProductFilter } from '@ikea/components/organisms/ProductFilter'
import { HtmlInput } from '@ikea/components/atoms/HtmlInput'
import { useForm, FormProvider, useWatch } from 'react-hook-form'

import { filterDefaultValues, sortOptions, SortTypes } from './data'

import { NextSeo } from 'next-seo'
import { useAppDispatch, useAppSelector } from '@ikea/store'
import {
  InputMaybe,
  ProductOrderByWithRelationInput,
  ProductQuery,
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
  ProductWhereInput,
  QueryMode,
  SortOrder,
  useProductsQuery,
} from '@ikea/generated/types'
import { setProductsSkip, setProductsTake } from '@ikea/store/search'
import { Case } from '@ikea/components/molecules/Case'
import { GridOpinionated } from '@ikea/components/molecules/GridOpinionated'
import {
  ProductCard01,
  ProductCard01Skeleton,
} from '@ikea/components/molecules/ProductCard01/ProductCard01'
import dynamic from 'next/dynamic'
import { useQuery } from '@apollo/client'
import { MessageLayout } from '@ikea/components/molecules/MessageLayout'
import { FormTypeProductFilter } from '@ikea/forms/productsFilter'
import { SwitchStatement } from '@ikea/components/molecules/Case/Case'

const Pagination = dynamic(
  () =>
    import('@ikea/components/molecules/Pagination/Pagination').then(
      (mod) => mod.Pagination,
    ),
  { ssr: false },
)

export const NoProducts = () => (
  <MessageLayout>
    <div className="text-left">
      <div className="text-xl font-semibold">No matching products found.</div>
      <div className="mt-1 text-sm text-gray">Try modifying the filters.</div>
    </div>
  </MessageLayout>
)

export const ProductsError = () => (
  <MessageLayout>
    <div className="max-w-lg space-y-2">
      <div className="text-xl font-semibold">Error</div>

      <div>
        Whoopsie daisy! Looks like the gremlins got into our system again.
        We&apos;re working on shooing them away, but in the meantime, please try
        again later.
      </div>
      <div>Thanks for your patience, human friend!</div>
    </div>
  </MessageLayout>
)

export const ProductsLoading = ({ count = 12 }: { count?: number }) => (
  <GridOpinionated>
    {Array.from(Array(count).keys()).map((item) => (
      <ProductCard01Skeleton key={item} />
    ))}
  </GridOpinionated>
)

const createFilters = (v: {
  search?: string | undefined
  price?: [number, number] | undefined
  rating?: string | undefined
  category?: string | undefined
  sort?: SortTypes | undefined
}): InputMaybe<ProductWhereInput> => {
  const { search, price, rating } = v
  console.log('search, price, rating', search, price, rating)
  const productsWhere: InputMaybe<ProductWhereInput> = {}
  const productRating = rating || 0

  console.log('Product rating: ', productRating)

  if (price) productsWhere.price = { gte: price[0], lte: price[1] }
  if (productRating) productsWhere.rating = { gte: +productRating }
  if (search) {
    productsWhere.name = { contains: search }
  }

  console.log('Products where', productsWhere)

  return productsWhere
}

export const ProductListing = () => {
  const methods = useForm({ defaultValues: filterDefaultValues })

  const dispatch = useAppDispatch()

  const skip = useAppSelector((state) => state.search.queryArgs.skip) || 0
  const take = useAppSelector((state) => state.search.queryArgs.take) || 0

  const formData = useWatch({ control: methods.control })

  const keys = Object.keys(methods.formState.dirtyFields)

  const dirtyFormData = Object.fromEntries(
    Object.entries(formData).filter(([key]) => keys.includes(key)),
  )

  console.log('FormData ', formData, methods.formState.dirtyFields)

  const { data, loading, error } = useQuery<
    ProductsQuery,
    ProductsQueryVariables
  >(ProductsDocument, {
    variables: {
      skip,
      take,
      ...(dirtyFormData['sort']
        ? { orderBy: [sortOptions[formData['sort'] || 'Best match']] }
        : {}),
      where: createFilters(dirtyFormData),
    },
  })
  const title = data?.productAggregate.count
    ? `${data?.productAggregate.count} Search page - Ikea clone | Karthick Ragavendran`
    : 'Loading... Ikea clone | Karthick Ragavendran'

  console.log('--- Error', error)
  return (
    <div>
      <NextSeo title={title} description="Search products and actually buy." />
      <FormProvider {...methods}>
        <div className="flex mt-responsive">
          <HtmlInput
            {...methods.register('search')}
            placeholder="Search product name"
            className="inline-block px-2 py-1 border border-1/5"
          />
          <ProductFilter defaultOpen={false} />
        </div>
      </FormProvider>
      <SwitchStatement>
        <Case when={loading}>
          <ProductsLoading />
        </Case>
        <Case when={data?.productAggregate.count === 0}>
          <NoProducts />
        </Case>
        <Case when={(data?.productAggregate.count || 0) > 0}>
          <GridOpinionated>
            {data?.products.map((item) => (
              <ProductCard01 key={item.id} product={item} />
            ))}
          </GridOpinionated>
        </Case>
        {/* <Case when={Boolean(error)}>
          <ProductsError />
        </Case> */}
      </SwitchStatement>
      <Pagination
        count={data?.productAggregate.count || 0}
        page={skip / take}
        rowsPerPage={take || 0}
        showLastButton
        showFirstButton
        rowsPerPageOptions={[12, 24, 36, 48]}
        onPageChange={(v, c) => dispatch(setProductsSkip(c * take))}
        onRowsPerPageChange={(v) => {
          dispatch(setProductsTake(+v.target.value))
        }}
      />
    </div>
  )
}
