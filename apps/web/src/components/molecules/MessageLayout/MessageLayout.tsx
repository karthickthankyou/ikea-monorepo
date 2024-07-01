import { ReactNode } from 'react'

export interface IMessageLayoutProps {
  children: ReactNode
  className?: string
}

export const MessageLayout = ({ children, className }: IMessageLayoutProps) => (
  <div
    className={`flex flex-col items-center justify-center h-[50vh] ${className}`}
  >
    {children}
  </div>
)
