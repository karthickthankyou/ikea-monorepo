export interface ISkeletonProps {
  className?: string
  round?: boolean
}

export const Skeleton = ({ className, round = false }: ISkeletonProps) => {
  const roundClass = round ? 'rounded-full' : 'rounded'
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${roundClass} ${className}`}
    />
  )
}
