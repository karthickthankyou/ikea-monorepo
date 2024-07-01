import { ReactNode } from 'react'

export interface IBadgeTextProps {
  text: ReactNode
}

export const BadgeText = ({ text }: IBadgeTextProps) => {
  if (!text) return null

  return (
    <div className="absolute flex items-center justify-center w-4 h-4 text-sm text-white -translate-x-1/2 translate-y-1/2 rounded bg-black/50 left-full bottom-full">
      {text}
    </div>
  )
}
