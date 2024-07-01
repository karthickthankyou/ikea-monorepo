import { LinearProgress, LinearProgressProps } from '@mui/material'

export const ProgressBar = (props: LinearProgressProps) => {
  return (
    <LinearProgress
      classes={{
        root: 'w-full',
        bar: 'bg-gray-200',
        colorPrimary: 'bg-gray-200',
        bar1Determinate: 'bg-gray-800',
      }}
      {...props}
    />
  )
}
