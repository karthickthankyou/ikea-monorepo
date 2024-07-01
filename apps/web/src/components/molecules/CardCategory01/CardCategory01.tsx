import { useRouter } from 'next/router'
import { Button } from '@ikea/components/atoms/Button'
import { Image } from '@ikea/components/atoms/Image'
import { OverlapSpace } from '../OverlapSpace/OverlapSpace'

export interface ICardCategory01Props {
  text: string
  href: string
  src: string
  className?: string
}

export const CardCategory01 = ({
  text,
  href,
  src,
  className,
}: ICardCategory01Props) => {
  const router = useRouter()
  return (
    <OverlapSpace className={`  group ${className}`}>
      <OverlapSpace.Child className=" -z-10">
        <Image src={src} alt="" />
      </OverlapSpace.Child>
      <OverlapSpace.Child className="flex items-end justify-center p-8">
        <Button
          className="transition-all group-hover:-translate-y-2 group-hover:shadow-xl"
          onClick={() => router.push(href)}
          color="white"
        >
          {text}
        </Button>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}
