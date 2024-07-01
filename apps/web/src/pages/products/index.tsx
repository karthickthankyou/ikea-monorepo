import { NextPage } from 'next'
import { Container } from '@ikea/components/atoms/Container/Container'
import { ProductListing } from '@ikea/components/templates/ProductListing'

const SearchProductsPage: NextPage = () => {
  return (
    <Container>
      <ProductListing />
    </Container>
  )
}

export default SearchProductsPage
