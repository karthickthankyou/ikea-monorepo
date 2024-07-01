import {
  IconBriefcase,
  IconCirclePlus,
  IconHeart,
  IconHelp,
  IconHome,
  IconInfoCircle,
  IconLockOpenOff,
  IconPhoto,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from '@tabler/icons-react'

export type SectionType = {
  position: { top?: string; right?: string; left?: string; bottom?: string }
  title: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  enableCheck?: boolean
}

export const sections: SectionType[] = [
  {
    position: { bottom: '2%', left: '2%' },
    title: 'Home',
    href: '/',
    Icon: IconHome,
  },

  {
    title: 'Products',
    position: { top: '80%', right: '40%' },
    href: '/products',
    Icon: IconSearch,
  },

  {
    title: 'Product page',
    position: { top: '92%', right: '32%' },
    href: '/products/5084',
    Icon: IconPhoto,
  },

  {
    title: 'Authentication',
    position: { top: '64%', left: '24%' },
    href: '/register',
    Icon: IconLockOpenOff,
  },

  {
    title: 'Wishlist',
    position: { top: '8%', right: '76%' },
    href: '/wishlist',
    Icon: IconHeart,

    enableCheck: true,
  },

  {
    title: 'Cart',
    position: { top: '16%', right: '84%' },
    href: '/cart',
    Icon: IconShoppingCart,

    enableCheck: true,
  },

  {
    title: 'Orders',
    position: { top: '0%', right: '92%' },
    href: '/orders',
    Icon: IconBriefcase,

    enableCheck: true,
  },
  {
    title: 'User',
    position: { top: '16%', right: '12%' },
    href: '/user',
    Icon: IconUserCircle,

    enableCheck: true,
  },

  {
    title: 'Post new product',
    position: { top: '8%', right: '2%' },
    href: '/products/new',
    Icon: IconCirclePlus,
    enableCheck: true,
  },

  {
    title: '404',
    position: { top: '58%', right: '2%' },
    href: '/404',
    Icon: IconInfoCircle,
  },

  {
    title: 'Support',
    position: { top: '6%', right: '56%' },
    href: '/support',
    Icon: IconHelp,
  },
]
