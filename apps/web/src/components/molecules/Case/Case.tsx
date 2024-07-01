import React, { ReactElement, ReactNode } from 'react'

export interface ICaseProps {
  when: boolean
  children: React.ReactNode
}

export const Case = ({ when, children }: ICaseProps) =>
  when ? <>{children}</> : null

interface SwitchProps {
  children: ReactNode
}

export const SwitchStatement: React.FC<SwitchProps> = ({ children }) => {
  const validChild = React.Children.toArray(children).find((child) => {
    if (React.isValidElement(child)) {
      return child.props.when
    }
    return false
  }) as ReactElement | undefined

  return validChild ? React.cloneElement(validChild) : null
}
