import { useRouter } from 'next/router'
import { Image } from '@ikea/components/atoms/Image'
import { Button } from '@ikea/components/atoms/Button'

export interface IAdBannerProps {
  src: string
  title: string
  description: string
  buttonText: string
  href: string
}

export const AdBanner = ({
  src,
  title,
  description,
  buttonText,
  href,
}: IAdBannerProps) => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 gap-responsive sm:grid-cols-2">
      <div>
        <Image alt="" src={src} />
      </div>
      <div>
        <div className="text-xl font-bold">{title}</div>
        <div className="max-w-md mt-2 text-gray-600">{description}</div>
        <Button
          color="black"
          onClick={() => router.push(href)}
          className="mt-8"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
