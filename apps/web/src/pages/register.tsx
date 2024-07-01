import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Register } from '@ikea/components/templates/Register'
import { useRedirectLoggedInUsers } from '@ikea/hooks'

const CreateAccountPage: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title="Create account page - Ikea clone | Karthick Ragavendran"
        description="Create account with your email or google account."
      />
      <Register />
    </div>
  )
}

export default CreateAccountPage
