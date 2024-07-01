import Link from 'next/link'

import {
  IconBrandGuardian,
  IconDoorExit,
  IconHeart,
  IconHelp,
  IconMenu2,
  IconPhone,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconUserShield,
} from '@tabler/icons-react'

import { Sidebar } from '../Sidebar'

import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { Brand } from '../../atoms/Brand'
import { useAppSelector } from '../../../store'
import { selectUser } from '../../../store/user'
import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import { signOut } from '@ikea/util/auth'
import Logo from '@ikea/components/atoms/Logo'
import { useMyProductsQuery, UserProductStatus } from '@ikea/generated/types'
import { BadgeText } from '@ikea/components/molecules/BadgeText'

type RouteType = {
  text: string
  icon?: ReactNode
  href: string
  loggedIn?: boolean
  mainNav?: boolean
}

const routes: readonly RouteType[] = [
  { icon: <IconHelp />, text: 'Support', href: '/support' },
  { icon: <IconPhone />, text: 'Contact', href: '/contact' },
  {
    icon: <IconSearch />,
    text: 'Search',
    href: '/products',
    mainNav: true,
    loggedIn: true,
  },
  {
    icon: <IconShoppingCart />,
    text: 'Cart',
    href: '/cart',
    mainNav: true,
    loggedIn: true,
  },
  {
    icon: <IconHeart />,
    text: 'Wishlist',
    href: '/wishlist',
    mainNav: true,
    loggedIn: true,
  },
  {
    icon: <IconUser />,
    text: 'Profile',
    href: '/user',
    mainNav: true,
    loggedIn: true,
  },
] as const

const filterRoutes = (uid: string, mainNav: boolean) => {}

const LoginLink = () => (
  <Link
    href="/login"
    className="block w-full px-3 py-2 font-medium text-center text-black capitalize border border-black rounded"
  >
    Login
  </Link>
)

const RegisterLink = () => (
  <Link
    href="/register"
    className="block w-full px-3 py-2 font-medium text-center text-white capitalize bg-black border border-black rounded"
  >
    Register
  </Link>
)

export const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    key={label}
    href={href}
    className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4"
  >
    {label}
  </Link>
)

const NavSidebar = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const user = useAppSelector(selectUser)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header>
        <div className="flex items-end justify-between">
          <div className="text-xl">
            <div className="max-w-xs text-2xl font-bold">
              Hello,{' '}
              {user.displayName ? (
                <span className="text-primary">{user.displayName}.</span>
              ) : (
                'Visitor.'
              )}
            </div>
          </div>
        </div>
      </Sidebar.Header>
      <Sidebar.Body>
        <div className="flex flex-col items-start w-full">
          <div className="py-1 bg-gray-100 h-0.5" />
          {routes
            .filter((route) => !route.loggedIn || !!user.uid)
            .map((route) => (
              <Link
                key={route.text}
                href={route.href}
                className="py-1.5 font-medium hover:underline text-gray-600 capitalize flex gap-2"
              >
                {route.icon} {route.text}
              </Link>
            ))}
        </div>
      </Sidebar.Body>
      <Sidebar.Footer>
        {!user.uid ? (
          <div className="space-y-2">
            <LoginLink />
            <RegisterLink />
          </div>
        ) : (
          <Button
            variant="text"
            onClick={() => signOut()}
            className="flex items-center gap-2"
          >
            Log out <IconDoorExit />
          </Button>
        )}
      </Sidebar.Footer>
    </Sidebar>
  )
}

export const Header = () => {
  const [open, setOpen] = useState(false)
  const user = useAppSelector(selectUser)

  const { data, loading } = useMyProductsQuery({
    variables: { where: { uid: { equals: user.uid } } },
    skip: !user.uid,
  })

  const wishlistedItems = data?.myProducts.filter(
    (prod) => prod.status === UserProductStatus.Wishlisted,
  )
  const cartItems = data?.myProducts.filter(
    (prod) => prod.status === UserProductStatus.InCart,
  )

  console.log('Widhlisted', wishlistedItems, cartItems)

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full shadow-md shadow-gray-300/10 bg-white/20 backdrop-blur-md">
        <Container className="relative z-50 flex items-center justify-between h-16 py-2">
          <NavSidebar open={open} setOpen={setOpen} />
          <div className="relative z-10 flex items-center justify-between w-full gap-10">
            <Logo />
            <div className="items-center hidden ml-auto lg:flex lg:gap-6">
              {routes
                .filter(
                  (route) => route.mainNav && (!route.loggedIn || !!user.uid),
                )
                .map((route) => (
                  <Link key={route.text} href={route.href} className="relative">
                    {route.icon}{' '}
                    {route.text == 'Wishlist' ? (
                      <BadgeText
                        text={
                          (wishlistedItems?.length || 0) > 9
                            ? '9+'
                            : wishlistedItems?.length
                        }
                      />
                    ) : (
                      ''
                    )}
                    {route.text == 'Cart' ? (
                      <BadgeText
                        text={
                          (cartItems?.length || 0) > 9
                            ? '9+'
                            : cartItems?.length
                        }
                      />
                    ) : (
                      ''
                    )}{' '}
                  </Link>
                ))}
            </div>

            <div className="flex items-center gap-3">
              {!user.uid ? (
                <>
                  <RegisterLink />
                  <LoginLink />
                </>
              ) : null}
              <button
                onClick={() => setOpen((state) => !state)}
                type="button"
                // className="border "
              >
                <IconMenu2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
