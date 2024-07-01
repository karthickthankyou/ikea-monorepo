import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

// import ProductPageTemplate from 'src/components/templates/ProductPageTemplate'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getQueryParam } from '@ikea/util'
import { useAppSelector } from '@ikea/store'
import { useCreateViewMutation, useProductQuery } from '@ikea/generated/types'
import { ProductPageTemplate } from '@ikea/components/templates/ProductPageTemplate'
import { selectUid } from '@ikea/store/user'

const ProductPage: NextPage = () => {
  const id = parseInt(getQueryParam(useRouter().query.id), 10)
  const product = useProductQuery({
    variables: { where: { id } },
  })

  const title = product.data?.product?.name

  const uid = useAppSelector(selectUid)

  const [createView] = useCreateViewMutation()
  useEffect(() => {
    if (product.data?.product.id && uid) {
      createView({
        variables: {
          createViewInput: { pid: product.data?.product.id, uid },
        },
      })
    }
  }, [createView, product.data?.product.id, uid])

  return (
    <div>
      <NextSeo
        title={`${
          title || 'Product page loading...'
        } - Ikea clone | Karthick Ragavendran`}
        description="Create account with your email or google account."
      />
      <ProductPageTemplate product={product} />
    </div>
  )
}

export default ProductPage
