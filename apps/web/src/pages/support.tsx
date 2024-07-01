import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Container } from '@ikea/components/atoms/Container'
import Link from 'next/link'
import { Skeleton } from '@ikea/components/molecules/Skeleton'
import { useTransition, animated, config } from 'react-spring'
import { TripGuide } from '@ikea/components/organisms/TripGuide/TripGuide'
import { format } from 'date-fns'
import { useMySupportsQuery } from '@ikea/generated/types'

const SupportPage: NextPage = () => {
  const { loading, data } = useMySupportsQuery()
  const messages = data?.mySupports
  const messagesTransitions = useTransition(messages || [], {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(24px) skew(12deg)' },
    enter: { opacity: 1, transform: 'translateY(0px) skew(0deg)' },
    leave: { opacity: 0, transform: 'translateY(12px) skew(12deg)' },
    trail: 200,
    config: config.gentle,
  })
  const count = data?.supportAggregate.count

  if (messages?.length === 0)
    return (
      <div className="items-center justify-center h-screen80">
        No messages found.
      </div>
    )

  return (
    <div className="min-h-screen">
      <Container>
        <NextSeo
          title={`${count || 'Loading...'} - Ikea clone | Karthick Ragavendran`}
          description="Create account with your email or google account."
        />
        <div className="mb-4 text-lg font-semibold">Support messages</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Skeleton key={item} className="w-full h-36" />
            ))}
          {!messages ||
            (messages?.length === 0 && (
              <div>
                <div>No results.</div>
                <Link href="/products" className="underline underline-offset-4">
                  Go to store.
                </Link>
              </div>
            ))}
          {messagesTransitions((style, item) => (
            <animated.div
              style={style}
              className="flex flex-col overflow-hidden"
            >
              <div className="mt-1 text-xs text-gray">
                {format(new Date(item.updatedAt), 'PPp')}
              </div>
              <div className="mt-1 text-lg font-medium line-clamp-3">
                {item.message}
              </div>
              <div className="mt-auto text-xs text-gray line-clamp-2">
                {item.title}
              </div>
            </animated.div>
          ))}
        </div>
      </Container>
      <div className="my-12 bg-gray-25">
        <Container>
          <div className="pt-12 mb-2 text-xl font-semibold">Are you lost?</div>
          <div className="text-sm">
            Use this trip guide to navigate to different parts of this
            application.{' '}
          </div>
          <TripGuide currentPageName="Support" />
        </Container>
      </div>
    </div>
  )
}

export default SupportPage
