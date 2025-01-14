import { useRouter } from 'next/router'
import { Button } from '@ikea/components/atoms/Button/Button'
import { Image } from '@ikea/components/atoms/Image'
import { OverlapSpace } from '../OverlapSpace/OverlapSpace'

export interface IBannerCard01Props {
  title: string
  description: string
  src: string
  href: string
}

export const BannerCard01 = ({
  title,
  description,
  src,
  href,
}: IBannerCard01Props) => {
  const router = useRouter()
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight uppercase">
        {title}
      </h2>
      <p className="max-w-md mt-2 text-sm text-gray-600">{description}</p>
      <OverlapSpace className="mt-4">
        <OverlapSpace.Child className="-z-20">
          <Image src={src} alt="" />
        </OverlapSpace.Child>
        <OverlapSpace.Child className="flex items-end justify-end p-4">
          <Button onClick={() => router.push(href)} color="white">
            Shop now
          </Button>
        </OverlapSpace.Child>
      </OverlapSpace>
    </div>
  )
}
