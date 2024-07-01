import { ReactNode } from 'react'

export interface IGridOpinionatedProps {
  children: ReactNode
}

export const GridOpinionated = ({ children }: IGridOpinionatedProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-responsive gap-responsive">
    {children}
  </div>
)
