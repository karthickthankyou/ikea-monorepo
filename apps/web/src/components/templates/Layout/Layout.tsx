import { ReactElement } from 'react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'

import { useRouter } from 'next/router'

import { Footer } from '../../organisms/Footer'
import { IconArrowsDoubleSeNw } from '@tabler/icons-react'
import { Header } from '@ikea/components/organisms/Header'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const NoNavUrls = ['/register', '/login']

const Layout = ({ children }: ILayoutProps) => {
  const url = useRouter().pathname

  return NoNavUrls.includes(url) ? (
    <main>{children}</main>
  ) : (
    <>
      <SkipNavLink className="absolute z-50 px-2 py-1 text-red-700 bg-red-100 opacity-20 -translate-y-14 focus:translate-y-0 focus:opacity-100">
        <div className="flex items-center gap-2">
          Skip navigation bar{' '}
          <IconArrowsDoubleSeNw className="w-4 h-4 animate-slide-right" />
        </div>
      </SkipNavLink>
      <Header />
      <main>
        <SkipNavContent />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
