import NextImage, { ImageProps } from 'next/image'

export const Image = ({
  className,
  src,
  width = 400,
  height = 400,
  alt = '',
  quality = 75,

  ...props
}: ImageProps) => {
  const imgSrc =
    src ||
    'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/nopicture_fi31cv.jpg'

  return (
    <NextImage
      className={`object-cover w-full h-full ${className}`}
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      quality={quality}
      placeholder="empty"
      blurDataURL="/images/blur.png"
      //   onError={(e) => {
      //     const target = e.target as HTMLImageElement
      //     target.src = 'https://picsum.photos/200'
      //   }}
      {...props}
    />
  )
}
