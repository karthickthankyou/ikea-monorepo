import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PostProductTemplate from '@ikea/components/templates/PostProduct'

const PostProductPage: NextPage = () => (
  <div>
    <NextSeo
      title="New product - Ikea clone | Karthick Ragavendran"
      description="Post new product."
    />
    <PostProductTemplate />
  </div>
)

export default PostProductPage
