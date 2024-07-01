import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { getFunctions, httpsCallable } from 'firebase/functions'

import { Button } from '@ikea/components/atoms/Button/Button'
import { useState } from 'react'
import { useAppSelector } from '@ikea/store'
import { Container } from '@ikea/components/atoms/Container'
import Link from 'next/link'
import { Badge } from '@ikea/components/atoms/Badge/Badge'
import { useCreateSellerMutation, useSellerQuery } from '@ikea/generated/types'
import { notification$ } from '@ikea/subjects'

const GetBadge = ({
  isSeller,
  isUser,
}: {
  isSeller: boolean | undefined
  isUser: boolean | undefined
}) => {
  // eslint-disable-next-line no-nested-ternary
  const text = isSeller ? 'Seller' : isUser ? 'User' : 'Unauthenticated'
  // eslint-disable-next-line no-nested-ternary
  const variant = isSeller ? 'red' : isUser ? 'primary' : 'gray'
  return (
    <Badge size="sm" variant={variant}>
      {text}
    </Badge>
  )
}

const UserPage: NextPage = () => {
  const uid = useAppSelector((state) => state.user.uid)

  const roles = useAppSelector((state) => state.user.roles)

  const { data: seller } = useSellerQuery({ variables: { where: { uid } } })

  const [createSeller, { loading }] = useCreateSellerMutation()
  const isUser = Boolean(uid)
  const isSeller = Boolean(seller?.seller.uid)

  return (
    <Container className="min-h-screen">
      <NextSeo
        title="User page - Ikea clone | Karthick Ragavendran"
        description="Create account with your email or google account."
      />
      <div className="flex items-center gap-2 text-lg font-semibold">
        <div>My Account</div> <GetBadge isSeller={isSeller} isUser={isUser} />{' '}
      </div>

      <div className="font-bold">ID: {uid || 'Not logged in.'}</div>

      <div className="py-2 mt-6 mb-2">
        {!isUser ? (
          <Link href="/login" className="px-4 py-2 text-white bg-primary">
            Go to login page
          </Link>
        ) : null}
      </div>

      <div className="mt-4">
        {isUser && !isSeller && (
          <Button
            loading={loading}
            type="button"
            onClick={async () => {
              if (!uid) {
                notification$.next({ message: 'You are not logged in.' })
                return
              }
              await createSeller({ variables: { createSellerInput: { uid } } })
            }}
          >
            Become Seller
          </Button>
        )}
      </div>
      <div>
        {isSeller && (
          <Link
            className="px-4 py-2 text-white rounded-full shadow-lg hover:shadow-xl bg-primary"
            href="/products/new"
          >
            Post a product
          </Link>
        )}
      </div>
    </Container>
  )
}

export default UserPage
