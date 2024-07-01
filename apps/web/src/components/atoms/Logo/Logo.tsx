import { bgClasses, colorClasses, AllColors } from '@ikea/util/style'
import Link from 'next/link'

export interface ILogoProps {
  color?: AllColors
  bg?: AllColors
}

const Logo = ({ color = 'primary', bg = 'yellow' }: ILogoProps) => (
  <Link
    href="/"
    className={`py-0.5 px-1 text-2xl font-black inline-block leading-none tracking-tight ${bgClasses[bg]} ${colorClasses[color]} `}
  >
    IKEA
  </Link>
)

export default Logo
